import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/"
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const allPlaces = [];
export default class PlacesService {

    static async getPlace(queryString) {
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${queryString}`
        try {
            const response = await axios.get(proxyurl + url);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async searchPlaces(queryString) {
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?${queryString}`
        try {
            const response = await axios.get(proxyurl + url);
            return response.data.results;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async fetchPlaces(lat, lng, radius) {

        const fetchPage = async (pageToken) => {
            const response = await axios.get(proxyurl + 'https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
                params: {
                    location: `${lat},${lng}`,
                    radius: radius,
                    types: 'cafe,museum,restaurant',
                    language: 'en',
                    key: GOOGLE_API_KEY,
                    pagetoken: pageToken,
                },
            });
            console.log(response)
            if (response.status === 200) {
                const data = response.data;
                allPlaces.push(...data.results);

                if (data.next_page_token) {
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    await fetchPage(data.next_page_token);
                }
            } else {
                throw new Error('Error while fetching places');
            }
        };
        await fetchPage();

        return allPlaces;
    }

}
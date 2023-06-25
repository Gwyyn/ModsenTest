import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/"
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

}
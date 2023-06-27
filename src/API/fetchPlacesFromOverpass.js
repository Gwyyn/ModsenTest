import axios from 'axios';

export const fetchPlacesFromOverpass = async (lat, lng, radius, amenityType) => {

    const overpassUrl = 'https://overpass-api.de/api/interpreter';
    const query = `[out:json];
      (
        node["amenity"="${amenityType}"](around:${radius*1000},${lat},${lng});
        way["amenity"="${amenityType}"](around:${radius*1000},${lat},${lng});
        relation["amenity"="${amenityType}"](around:${radius*1000},${lat},${lng});
      );
      out body;
      >;
      out skel qt;`;
    try {
        const response = await axios.post(overpassUrl, query, {
            headers: {
                'Content-Type': 'text/plain',
            },
        });

        if (response.status === 200) {
            const data = response.data;
            const places = processData(data);
            return places;
        } else {
            throw new Error('Error while fetching places from Overpass API');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const processData = (data) => {
    const places = [];

    for (const element of data.elements) {
        if (element.tags && element.tags.name && element.lat && element.lon) {
            const place = {
                name: element.tags.name,
                lat: element.lat,
                lon: element.lon,
                amenity: element.tags.amenity,
            };
            places.push(place);
        }
    }

    return places;
};
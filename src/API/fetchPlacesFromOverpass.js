import axios from 'axios';

export const fetchPlacesFromOverpass = async (lat, lng, radius, amenityTypes) => {

    const overpassUrl = 'https://overpass-api.de/api/interpreter';
    const places = [];
    for (const amenityType of amenityTypes) {
        const query = `[out:json];
      (
        node(around:${radius * 1000},${lat},${lng})[${amenityType}];
        way(around:${radius * 1000},${lat},${lng})[${amenityType}];
        relation(around:${radius * 1000},${lat},${lng})[${amenityType}];
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
                const filteredPlaces = processData(data);
                places.push(...filteredPlaces);
            } else {
                throw new Error('Error while fetching places from Overpass API');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    console.log(places)
    return places;

};

const processData = (data) => {
    const places = [];

    for (const element of data.elements) {
        if (element.tags && element.tags.name && element.lat && element.lon && element.tags.amenity !== undefined ) {
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
import fetch from 'node-fetch';
import { IP_API_URL, MAPBOX_PATHBASE, MAPBOX_ACCESS_TOKEN } from '../config/index.js';
import { isInReservedRange } from '../helpers/index.js';

export class LocationRepository {

    constructor() {
        this.basepath = IP_API_URL;
        this.placeTypes = 'place';
    }

    async findByIp(ip) {
        const ipApiUrl = isInReservedRange(ip) ? `${this.basepath}` : `${this.basepath}/${ip}`;
        const ipApiResponse = await fetch(ipApiUrl);
        const { country, regionName, city, lat, lon } = await ipApiResponse.json();
        return { country, regionName, city, lat, lon };
    }

    async findCityCoordinates(city) {
        const ipApiResponse = await fetch(`${MAPBOX_PATHBASE}${city}.json?access_token=${MAPBOX_ACCESS_TOKEN}&query=${city}`);
        const { features } = await ipApiResponse.json();
        const [cityInformation] = features.filter(feature => this.placeTypes.includes(feature.place_type));
        const [lon, lat] = cityInformation.geometry.coordinates;
        return { lat, lon };
    }
}
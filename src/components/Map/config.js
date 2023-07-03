import L from "leaflet";
import iconImage from "../../assets/Vector.svg";
import LocationMarker from "../../assets/LocationMarker.png";

export const markerIcon = new L.Icon({
    iconUrl: iconImage,
    iconSize: [32, 24],
    iconAnchor: [16, 15],
})

export const locationMarkerIcon = new L.Icon({
    iconUrl: LocationMarker,
    iconSize: [38, 38]
})

export const urlMap = process.env.REACT_APP_LEAFLET_URL;
export const ZOOM_LEVEL = 12;
export const DEFAULT_LAT = 53.9;
export const DEFAULT_LNG = 27.56667;
export const DEFAULT_ZOOM = 16;
export const DEFAULT_RADIUS = 1000;
export const MAX_RADIUS = 100000

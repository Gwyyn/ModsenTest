import React, {useEffect, useState} from 'react';
import {Circle, MapContainer, Marker, Popup, TileLayer, ZoomControl} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import UseGeoLocation from "../../hooks/UseGeoLocation";
import FlyToButton from "../FlyToButton/FlyToButton";
import iconImage from '../../assets/Vector.svg';
import LocationMarker from "../../assets/LocationMarker.png"
import defaultIcon from '../../assets/categoriesIcons/default.png'
import './Map.css'
import ResetCenterView from "../ResetCenterView/ResetCenterView";
import {fetchPlacesFromOverpass} from "../../API/fetchPlacesFromOverpass";

const urlMap = process.env.REACT_APP_LEAFLET_URL;
const ZOOM_LEVEL = 12;
const DEFAULT_LAT = 53.9;
const DEFAULT_LNG = 27.56667;
const DEFAULT_RADIUS = 1000;
const MAX_RADIUS = 100000

const Map = (props) => {

    const {selectPosition, selectRadius, categoriesState} = props;
    const selectRadiusInKilom = selectRadius * 1000;

    const locationSelection = [selectPosition?.geometry.location?.lat(), selectPosition?.geometry.location?.lng()]

    const location = UseGeoLocation();

    let myLat = location.coordinates ? location.coordinates.lat : DEFAULT_LAT;
    let myLng = location.coordinates ? location.coordinates.lng : DEFAULT_LNG;

    const [center, setCenter] = useState({lat: DEFAULT_LAT, lng: DEFAULT_LNG});
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        if (location.loaded && !location.error && location.coordinates) {
            setCenter({lat: myLat, lng: myLng});
        }
    }, [location]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activeCategories = categoriesState.filter(category => category.isActive);
                const selectedTypes = activeCategories.map(category => category.type);
                const places = await fetchPlacesFromOverpass(myLat, myLng, selectRadius, selectedTypes);
                setPlaces(places);
                console.log(places)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [myLat, myLng, selectRadius])

    const markerIcon = new L.Icon({
        iconUrl: iconImage,
        iconSize: [32, 24],
        iconAnchor: [16, 15],
    })

    const locationMarkerIcon = new L.Icon({
        iconUrl: LocationMarker,
        iconSize: [38, 38]
    })



    return (
        <div>
            <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                zoomControl={false}
                className="mapContainer"
            >
                <TileLayer
                    url={urlMap}
                />
                {location.loaded && !location.error && (
                    <Marker
                        position={[
                            myLat,
                            myLng
                        ]}
                        icon={markerIcon}
                    />
                )}
                {location.loaded && !location.error && (
                    <Circle
                        center={[
                            myLat,
                            myLng
                        ]}
                        radius={
                            selectRadiusInKilom <= MAX_RADIUS ? selectRadiusInKilom : DEFAULT_RADIUS}
                    />
                )}

                {places.map((place, index) => {
                    const category = categoriesState.find((category) => category.type === `"amenity"="${place.amenity}"`);
                    const iconUrl = category ? category.icon : defaultIcon;
                    const customIcon = L.icon({
                        iconUrl,
                        iconSize: [25, 25]
                    });
                    return (
                        <Marker
                            key={index}
                            position={[place.lat, place.lon]}
                            icon={customIcon}
                        >
                            <Popup>
                                <b>{place.amenity}:</b>&nbsp;
                                {place.name}
                            </Popup>
                        </Marker>
                    )
                })}

                <ZoomControl
                    opcity="0.8"
                    position="bottomleft"/>
                <FlyToButton lat={myLat} lng={myLng} zoom={16}/>
                {selectPosition && (
                    <Marker
                        position={locationSelection}
                        icon={locationMarkerIcon}
                    />
                )}
                <ResetCenterView selectPosition={selectPosition}/>
            </MapContainer>
        </div>
    );
}

export default Map;
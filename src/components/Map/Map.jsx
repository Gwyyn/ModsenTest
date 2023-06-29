import React, {useEffect, useMemo, useState} from 'react';
import {Circle, MapContainer, Marker, Popup, TileLayer, ZoomControl} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import UseGeoLocation from "../../hooks/UseGeoLocation";
import FlyToButton from "../FlyToButton/FlyToButton";
import defaultIcon from '../../assets/categoriesIcons/default.png'
import './Map.css'
import ResetCenterView from "../ResetCenterView/ResetCenterView";
import {fetchPlacesFromOverpass} from "../../API/fetchPlacesFromOverpass";
import {
    DEFAULT_LAT,
    DEFAULT_LNG,
    DEFAULT_RADIUS,
    DEFAULT_ZOOM,
    locationMarkerIcon,
    markerIcon,
    MAX_RADIUS,
    urlMap,
    ZOOM_LEVEL
} from "./config";


const Map = React.memo((props) => {
    const {selectPosition, selectRadius, categoriesState} = props;

    const [center, setCenter] = useState({lat: DEFAULT_LAT, lng: DEFAULT_LNG});
    const [places, setPlaces] = useState([]);

    const selectRadiusInKilom = selectRadius * 1000;

    const locationSelection = [selectPosition?.geometry.location?.lat(), selectPosition?.geometry.location?.lng()]

    const location = UseGeoLocation();

    const myLat = location.coordinates ? location.coordinates.lat : DEFAULT_LAT;
    const myLng = location.coordinates ? location.coordinates.lng : DEFAULT_LNG;


    const filteredPlaces = useMemo(() => {
        return places.filter(({tags}) => {
            const category = categoriesState.find(category => {
                const [key, value] = category.type.split("=");
                return tags[key.replace(/["']/g, "")] === value.replace(/["']/g, "");
            });
            return category && category.isActive;
        });
    }, [places, categoriesState]);

    useEffect(() => {
        if (location.loaded && !location.error && location.coordinates) {
            setCenter({lat: myLat, lng: myLng});
        }
    }, [location]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const selectedTypes = categoriesState
                    .filter(category => category.isActive)
                    .map(category => category.type)
                const places = await fetchPlacesFromOverpass(myLat, myLng, selectRadius, selectedTypes);
                setPlaces(places);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [myLat, myLng, selectRadius, categoriesState])



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

                {filteredPlaces.map(({lat, lon, name, tags}, index) => {
                    const category = categoriesState.find((category) => {
                        const [key, value] = category.type.split("=");
                        return tags[key.replace(/["']/g, "")] === value.replace(/["']/g, "");
                    });
                    const iconUrl = category ? category.icon : defaultIcon;
                    const customIcon = L.icon({
                        iconUrl,
                        iconSize: [25, 25]
                    });
                    return (
                        <Marker
                            key={index}
                            position={[lat, lon]}
                            icon={customIcon}
                        >
                            <Popup>
                                <b>{category.name}:</b>&nbsp;
                                {name}
                            </Popup>
                        </Marker>
                    )
                })}

                <ZoomControl
                    opcity="0.8"
                    position="bottomleft"/>
                <FlyToButton lat={myLat} lng={myLng} zoom={DEFAULT_ZOOM}/>
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
})

export default Map;
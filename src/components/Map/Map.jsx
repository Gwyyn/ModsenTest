import React, {useEffect, useState} from 'react';
import {Circle, MapContainer, Marker, TileLayer, ZoomControl} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import UseGeoLocation from "../../hooks/UseGeoLocation";
import FlyToButton from "../FlyToButton/FlyToButton";
import iconImage from '../../assets/Vector.svg';
import LocationMarker from "../../assets/LocationMarker.png"
import './Map.css'
import ResetCenterView from "../ResetCenterView/ResetCenterView";

const urlMap = process.env.REACT_APP_LEAFLET_URL;
const ZOOM_LEVEL = 12;
const DEFAULT_LAT = 53.9;
const DEFAULT_LNG = 27.56667;
const DEFAULT_RADIUS = 100;

const Map = (props) => {

    const {selectPosition} = props;
    const locationSelection = [selectPosition?.geometry.location?.lat, selectPosition?.geometry.location?.lng]
    const location = UseGeoLocation();

    let myLat = location.coordinates ? location.coordinates.lat : DEFAULT_LAT;
    let myLng = location.coordinates ? location.coordinates.lng : DEFAULT_LNG;

    const [center, setCenter] = useState({lat: DEFAULT_LAT, lng: DEFAULT_LNG});

    useEffect(() => {
        if (location.loaded && !location.error && location.coordinates) {
            setCenter({lat: myLat, lng: myLng});
        }
    }, [location]);

    const markerIcon = new L.Icon({
        iconUrl: iconImage,
        iconSize: [32, 24],
        iconAnchor: [16, 15],
    })

    const locationMarkerIcon = new L.Icon({
        iconUrl: LocationMarker,
        iconSize: [38,38]
    })

    return (
        <div>
            <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                style={{height: "100vh", width: "100%"}}
                zoomControl={false}
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
                    ></Marker>
                )}
                {location.loaded && !location.error && (
                    <Circle
                        center={[
                            myLat,
                            myLng
                        ]}
                        radius={DEFAULT_RADIUS}
                    />
                )}
                <ZoomControl
                    opcity="0.8"
                    position="bottomleft"/>
                <FlyToButton lat={myLat} lng={myLng} zoom={16}/>
                {selectPosition && (
                    <Marker
                        position={locationSelection}
                        icon={locationMarkerIcon}
                    ></Marker>
                )}
                <ResetCenterView selectPosition={selectPosition}/>
            </MapContainer>
        </div>
    );
}

export default Map;
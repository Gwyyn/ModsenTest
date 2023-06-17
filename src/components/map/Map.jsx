import React, {useState} from 'react';
import {MapContainer, Marker, TileLayer, ZoomControl} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import UseGeoLocation from "../../hooks/useGeoLocation";
import FlyToButton from "./FlyToButton";
import iconImage from '../utilsItems/images/Vector.png';
import './Map.css'

const Map = () => {

    const urlMap = process.env.REACT_APP_LEAFLET_URL;
    const ZOOM_LEVEL = 12;
    const DEFAULT_LAT = 53.9;
    const DEFAULT_LNG = 27.56667;

    const location = UseGeoLocation();
    let myLat = location.coordinates ? location.coordinates.lat : DEFAULT_LAT;
    let myLng = location.coordinates ? location.coordinates.lng : DEFAULT_LNG;

    const [center, setCenter] = useState({lat: DEFAULT_LAT, lng: DEFAULT_LNG});
    console.log(center)
    const markerIcon = new L.Icon({
        iconUrl: iconImage,
        iconSize: [30, 35],
        iconAnchor: [16, 32],
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
                <ZoomControl
                    opcity="0.8"
                    position="bottomleft"/>
                <FlyToButton lat={myLat} lng={myLng} zoom={16}/>
            </MapContainer>
        </div>
    );
}

export default Map;
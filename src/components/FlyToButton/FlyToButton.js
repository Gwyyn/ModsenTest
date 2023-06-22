import React from 'react';
import {useMap} from "react-leaflet";
import LocationBtn from "../../assets/buttons/locationBtn/LocationBtn";
import cl from './FlyToButton.module.css';

const FlyToButton = ({lat, lng, zoom}) => {

    const map = useMap();

    const handleClick = () => {
        map.flyTo([lat, lng], zoom);
    };

    return (
        <div onClick={handleClick}
             className={cl.locationBtn}
        >
            <LocationBtn/>
        </div>
    );
};

export default FlyToButton;

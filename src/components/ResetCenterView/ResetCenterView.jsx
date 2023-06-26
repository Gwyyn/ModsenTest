import React, {useEffect} from 'react';
import {useMap} from "react-leaflet";
import L from "leaflet";

const ResetCenterView = (props) => {
    const {selectPosition} = props;
    const map = useMap();
    useEffect(() => {
        if (selectPosition) {
            map.setView(
                L.latLng(selectPosition?.geometry.location?.lat(), selectPosition?.geometry.location?.lng()),
                map.getZoom(),
                {
                    animate: true
                }
            )
        }
    }, [selectPosition])

    return null
};

export default ResetCenterView;

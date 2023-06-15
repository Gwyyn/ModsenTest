import React, {Component} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

class MapComponent extends Component {

    state = {
        // lat: 55.702868,
        // lng: 37.530865,
        lat: 53.9,
        lng: 27.56667,
        zoom: 12
    };

    render() {
        let center = [this.state.lat, this.state.lng];

        return (
            <div>
                <MapContainer
                    center={center}
                    zoom={this.state.zoom}
                    style={{height: "100vh", width: "100%"}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        );
    }
}

export default MapComponent;
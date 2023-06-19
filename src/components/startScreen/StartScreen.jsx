import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "../map/Map";
import Header from "../header/Header";


const StartScreen = () => {
    return (
        <div
            style={{paddingRight: 0}}
            className='container-fluid pr-0'
        >
            <div className=' d-flex flex-row'>
                <Header/>

                <div
                    style={{paddingRight: 0}}
                    className='container-fluid m-0'
                >
                    <Map/>
                </div>

            </div>

        </div>
    );
};

export default StartScreen;
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "../Map/Map";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";


const StartScreen = () => {

    const [activeBtn, setActiveBtn] = useState(true);
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    useEffect(() => {

    }, [sideBar])


    return (
        <div
            style={{paddingRight: 0}}
            className='container-fluid pr-0'
        >
            <div className=' d-flex flex-row'>
                <Header onToggleSideBar={toggleSideBar}/>
                {sideBar && <SideBar onToggleSideBar={toggleSideBar}/>}
                <div
                    style={{paddingRight: 0, paddingLeft: 0}}
                    className='container-fluid m-0'
                >
                    <Map/>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
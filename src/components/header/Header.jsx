import React, {useState} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../utilsItems/Logo";
import SearchBtnOff from "../utilsItems/SearchBtn/SearchBtnOff";
import FavoritesBtnOff from "../utilsItems/FavoritesBtn/FavoritesBtnOff";
import Avatar from "../utilsItems/Avatar";
import Map from "../map/Map";
import SideBar from "../sideBar/SideBar";
import SelectorEngine from "bootstrap/js/src/dom/selector-engine";
import SearchBtnOn from "../utilsItems/SearchBtn/SearchBtnOn";


const Header = () => {

    const [sideBar, setSideBar] = useState(true);

    return (
        <div
            style={{paddingRight: 0}}
            className='container-fluid pr-0'
        >
            <div className=' d-flex flex-row'>
                <div className='row col-lg-1 col-md-1 col-sm-2 col-2'>
                    <div className=' min-vh-100 bg-light border border-start 2 d-flex flex-column align-items-center'>
                        <a href="" className='mt-3 d-flex justify-content-center'>
                            <Logo/>
                        </a>
                        <Link to="/search" className='nav-link px-1 mt-4'>
                            {sideBar ? <SearchBtnOff/>: <SearchBtnOn/> }
                        </Link>
                        <a href="" className='nav-link px-1 mt-2'>
                            <FavoritesBtnOff/>
                        </a>
                        <a className='nav-link px-1 position-absolute bottom-0 mb-4'>
                            <Avatar/>
                        </a>
                    </div>
                </div>

                {sideBar &&
                    <SideBar/>
                }

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

export default Header;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../utilsItems/Logo";
import SearchBtnOff from "../utilsItems/SearchBtn/SearchBtnOff";
import FavoritesBtnOff from "../utilsItems/FavoritesBtn/FavoritesBtnOff";
import Avatar from "../utilsItems/Avatar";
import MapComponent from "../map/MapComponent";


const Header = () => {
    return (
        <div
            style={{paddingRight: 0}}
            className='container-fluid pr-0'>
            <div className=' d-flex flex-row'>
                <div className='row'>
                    <div className='col-auto min-vh-100 bg-light border border-start 2'>
                        <a href="" className='mt-3 d-block'><Logo/></a>
                        <a href="" className='nav-link px-1 mt-4'>
                            <SearchBtnOff/>
                        </a>
                        <a href="" className='nav-link px-1 mt-2'>
                            <FavoritesBtnOff/>
                        </a>
                        <a className='nav-link px-1 position-absolute bottom-0 mb-4'>
                            <Avatar/>
                        </a>
                    </div>
                </div>
                <div
                    style={{paddingRight: 0}}
                    className='container-fluid m-0 '>
                    <MapComponent/>
                </div>
            </div>


        </div>
    );
};

export default Header;
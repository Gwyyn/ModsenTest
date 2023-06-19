import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../utilsItems/Logo";
import SearchBtnOff from "../utilsItems/SearchBtn/SearchBtnOff";
import FavoritesBtnOff from "../utilsItems/FavoritesBtn/FavoritesBtnOff";
import Avatar from "../utilsItems/Avatar";


const Header = () => {

    return (
        <div className='row col-lg-1 col-md-1 col-sm-2 col-2'>
            <div className=' min-vh-100 bg-light border border-start 2 d-flex flex-column align-items-center'>
                <a href="" className='mt-3 d-flex justify-content-center'>
                    <Logo/>
                </a>
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

    );
};

export default Header;
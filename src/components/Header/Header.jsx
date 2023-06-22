import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/Logo.svg";
import searchBtnOff from "../../assets/buttons/searchBtn/searchBtnOff.svg";
import favoritesBtnOn from "../../assets/buttons/favoritesBtn/favoritesBtnOn.svg";
import Avatar from "../../assets/Avatar.svg";
import {Link} from "react-router-dom";
import "./Header.css";
import searchBtnOn from "../../assets/buttons/searchBtn/searchBtnOn.svg";
import favoritesBtnOff from "../../assets/buttons/favoritesBtn/favoritesBtnOff.svg";


const Header = ({searchBtnActive, favoritesBtnActive, onToggleSearchSideBar, onToggleFavoritesSideBar}) => {


    return (
        <div className='row col-lg-1 col-md-1 col-sm-2 col-2'>
            <div
                className='min-vh-100 bg-light border border-start 2 d-flex flex-column align-items-center padding-left-0'>
                <a href="" className='mt-3 d-flex justify-content-center'>
                    <img src={Logo} alt=""/>
                </a>
                <div className='nav-link pointer px-1 mt-4 cursor-pointer' onClick={onToggleSearchSideBar}>
                    {searchBtnActive ? <img src={searchBtnOn} alt=""/> : <img className="btn" src={searchBtnOff} alt=""/>}
                </div>
                <div className='nav-link px-1 mt-2 cursor-pointer' onClick={onToggleFavoritesSideBar}>
                    {favoritesBtnActive ? <img src={favoritesBtnOn} alt=""/> :
                        <img  className="btn" src={favoritesBtnOff} alt=""/>}
                </div>
                <Link to="" className='nav-link px-1 position-absolute bottom-0 mb-4'>
                    <img src={Avatar} alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default Header;
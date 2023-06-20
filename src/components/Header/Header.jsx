import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../utilsItems/Logo";
import SearchBtnOff from "../utilsItems/SearchBtn/SearchBtnOff";
import FavoritesBtnOff from "../utilsItems/FavoritesBtn/FavoritesBtnOff";
import Avatar from "../utilsItems/Avatar";
import {Link} from "react-router-dom";
import "./Header.css";
import SearchBtnOn from "../utilsItems/SearchBtn/SearchBtnOn";
import FavoritesBtnOn from "../utilsItems/FavoritesBtn/FavoritesBtnOn";


const Header = ({onToggleSideBar}) => {

    const [searchBtnActive, setSearchBtnActive] = useState(false)
    const [favoritesBtnActive, setFavoritesBtnActive] = useState(false)

    useEffect(()=>{
        setSearchBtnActive(!searchBtnActive)
    },[onToggleSideBar])

    return (
        <div className='row col-lg-1 col-md-1 col-sm-2 col-2'>
            <div className=' min-vh-100 bg-light border border-start 2 d-flex flex-column align-items-center padding-left-0'>
                <a href="" className='mt-3 d-flex justify-content-center'>
                    <Logo/>
                </a>
                <div className='nav-link pointer px-1 mt-4 cursor-pointer' onClick={onToggleSideBar}>
                    {searchBtnActive? <SearchBtnOff/>: <SearchBtnOn/>}
                </div>
                <div className='nav-link px-1 mt-2 cursor-pointer' onClick={onToggleSideBar}>
                    {favoritesBtnActive? <FavoritesBtnOff/>: <FavoritesBtnOn/>}
                </div>
                <Link to="" className='nav-link px-1 position-absolute bottom-0 mb-4'>
                    <Avatar/>
                </Link>
            </div>
        </div>
    );
};

export default Header;
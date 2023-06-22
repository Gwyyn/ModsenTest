import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StartScreen.css"
import Map from "../Map/Map";
import Header from "../Header/Header";
import SideBarSearch from "../SideBarSearch/SideBarSearch";
import SideBarFavorites from "../SideBarFavorites/SideBarFavorites";


const StartScreen = () => {

    const [searchSideBar, setSearchSideBar] = useState(false);
    const [searchBtnActive, setSearchBtnActive] = useState(false);

    const [favoritesSideBar, setFavoritesSideBar] = useState(false);
    const [favoritesBtnActive, setFavoritesBtnActive] = useState(false);


    const toggleSearchSideBar = () => {
        if (!favoritesSideBar && !favoritesBtnActive) {
            setSearchSideBar((prev) => !prev);
            setSearchBtnActive((prev) => !prev);
        }

    };
    const toggleFavoritesSideBar = () => {
        if (!searchSideBar && !searchBtnActive) {
            setFavoritesSideBar((prev) => !prev);
            setFavoritesBtnActive((prev) => !prev);
        }
    };


    return (
        <div className='container-fluid pr-0 padding-right-0'>
            <div className=' d-flex flex-row'>
                <Header
                    onToggleSearchSideBar={toggleSearchSideBar}
                    onToggleFavoritesSideBar={toggleFavoritesSideBar}
                    searchBtnActive={searchBtnActive}
                    favoritesBtnActive={favoritesBtnActive}
                />
                {searchSideBar && <SideBarSearch onToggleSearchSideBar={toggleSearchSideBar}/>}
                {favoritesSideBar && <SideBarFavorites onToggleFavoritesSideBar={toggleFavoritesSideBar}/>}
                <div className='container-fluid m-0 padding-left-0 padding-right-0'>
                    <Map/>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StartScreen.css"
import Map from "../Map/Map";
import Header from "../Header/Header";
import SideBarSearch from "../SideBarSearch/SideBarSearch";
import SideBarFavorites from "../SideBarFavorites/SideBarFavorites";
import categories from "../utilItems/categories";


const StartScreen = () => {

    const [selectPosition, setSelectPosition] = useState();
    const [categoriesState, setCategoriesState] = useState(categories);
    const [selectRadius, setSelectRadius] = useState(1);

    const [searchSideBar, setSearchSideBar] = useState(false);
    const [searchBtnActive, setSearchBtnActive] = useState(false);

    const [favoritesSideBar, setFavoritesSideBar] = useState(false);
    const [favoritesBtnActive, setFavoritesBtnActive] = useState(false);

    const handleInputChangeRadius = (value) => {
        setSelectRadius(value);
    };


    const toggleSearchSideBar = () => {
        if (!favoritesSideBar && !favoritesBtnActive) {
            setSearchSideBar((prev) => !prev);
            setSearchBtnActive((prev) => !prev);
        }
        if (favoritesSideBar && favoritesBtnActive) {
            setSearchSideBar((prev) => !prev);
            setSearchBtnActive((prev) => !prev);
            setFavoritesSideBar((prev) => !prev);
            setFavoritesBtnActive((prev) => !prev);
        }

    };
    const toggleFavoritesSideBar = () => {
        if (!searchSideBar && !searchBtnActive) {
            setFavoritesSideBar((prev) => !prev);
            setFavoritesBtnActive((prev) => !prev);
        }
        if (searchSideBar && searchBtnActive) {
            setSearchSideBar((prev) => !prev);
            setSearchBtnActive((prev) => !prev);
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
                {searchSideBar &&
                    <SideBarSearch
                        setSelectPosition={setSelectPosition}
                        onToggleSearchSideBar={toggleSearchSideBar}
                        changeRadius={handleInputChangeRadius}
                        categoriesState={categoriesState}
                        setCategoriesState={setCategoriesState}
                    />
                }
                {favoritesSideBar && <SideBarFavorites onToggleFavoritesSideBar={toggleFavoritesSideBar}/>}
                <div className='container-fluid m-0 padding-left-0 padding-right-0'>
                    <Map
                        selectPosition={selectPosition}
                        selectRadius={selectRadius}
                        categoriesState={categoriesState}
                    />
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
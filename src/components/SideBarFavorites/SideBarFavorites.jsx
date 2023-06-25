import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cl from './SideBarFavorites.module.css'
import rightArray from '../../assets/rightArray.svg'


const SideBarFavorites = ({onToggleFavoritesSideBar}) => {
    return (
        <div className="col-auto col-lg-3 col-md-4 col-sm-4 col-4 d-flex flex-row position-relative">
            <div className="w-100 p-3">

            </div>
            <div className="d-flex align-items-center h-auto position-absolute top-50 start-100 ">
                <div className={cl.toggleSideBarBtn} onClick={onToggleFavoritesSideBar}>
                    <img src={rightArray} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SideBarFavorites;
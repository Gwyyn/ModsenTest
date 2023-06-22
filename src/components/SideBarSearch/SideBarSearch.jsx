import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cl from './SideBarSearch.module.css'
import rightArray from '../../assets/rightArray.svg'


const SideBarSearch = ({onToggleSearchSideBar}) => {
    return (
        <div className="col-auto col-lg-2 col-md-3 col-sm-3 col-3 d-flex flex-row position-relative">
            <div className="w-100 p-3">
            </div>
            <div className="d-flex align-items-center h-auto position-absolute top-50 start-100 ">
                <div className={cl.toggleSideBarBtn} onClick={onToggleSearchSideBar}>
                    <img src={rightArray} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SideBarSearch;
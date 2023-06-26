import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cl from './SideBarSearch.module.css'
import rightArray from '../../assets/rightArray.svg'
import SearchBox from "../SearchBox/SearchBox";


const SideBarSearch = (props) => {

    const {onToggleSearchSideBar, setSelectPosition,selectRadius, changeRadius} = props

    return (
        <div className="col-auto col-lg-3 col-md-4 col-sm-4 col-4 d-flex flex-row position-relative">
            <div className="w-100 p-3">
                <SearchBox
                    setSelectPosition={setSelectPosition}
                    changeRadius={changeRadius}
                    selectRadius={selectRadius}
                />
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
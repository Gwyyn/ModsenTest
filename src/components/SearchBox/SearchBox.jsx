import React, {useRef} from 'react';
import "./Search.css"
import searchBigBtn from '../../assets/buttons/searchBigBtn/searchBigBtn.svg'

import {LoadScript, StandaloneSearchBox} from "@react-google-maps/api"


const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const SearchBox = (props) => {

    const {setSelectPosition, changeRadius, selectRadius} = props;

    const inputRef = useRef();
    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        setSelectPosition(place)
    }

    const handleInputChange = (e) => {
        const {value} = e.target;
        changeRadius(value);
    };


    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="w-100 p-3">
                <LoadScript
                    googleMapsApiKey={GOOGLE_API_KEY}
                    libraries={["places"]}
                >
                    <StandaloneSearchBox
                        onLoad={ref => (inputRef.current = ref)}
                    >
                        <input
                            type="text"
                            className="form-control w-100 searchBox"
                            placeholder="Enter location"

                        />
                    </StandaloneSearchBox>
                </LoadScript>
            </div>
            <div className="position-absolute bottom-0 mb-4 w-75">
                <img
                    className="w-100"
                    src={searchBigBtn}
                    alt=""
                    onClick={handlePlaceChanged}
                />
            </div>
            <div className=" d-flex flex-column toggleRadiusWrapper">
                <div className="pb-2 fw-bold">В радиусе</div>
                <div className="d-flex flex-row ">
                    <input
                        className="form-control toggleRadius"
                        id="kilometer-input"
                        type="number"
                        min="0"
                        max="100"
                        value={selectRadius}
                        onChange={handleInputChange}
                    />
                    <div className="p-2 fw-bold"> км</div>
                </div>

            </div>
        </div>
    );
};

export default SearchBox;
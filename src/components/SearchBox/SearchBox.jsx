import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Search.css"
import searchBigBtn from '../../assets/buttons/searchBigBtn/searchBigBtn.svg'
import {List} from 'antd';
import PlacesService from "../../API/PlacesService";


const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const SearchBox = (props) => {
    const {setSelectPosition} = props;
    const [searchText, setSearchText] = useState("")
    const [listPlaces, setListPlaces] = useState([""])

    const params = {
        query: searchText,
        key: GOOGLE_API_KEY
    };

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="w-100 d-flex justify-content-center p-3 position-relative">
                <input
                    className="searchBox w-100"
                    type="text"
                    placeholder="Город, место..."
                    value={searchText}
                    onChange={(event) => {
                        setSearchText(event.target.value)
                    }}
                />
            </div>

            <div className="infiniteList_wrapper">
                <InfiniteScroll dataLength={listPlaces.length}>
                    <List
                        dataSource={listPlaces}
                        renderItem={(item) => (
                            <List.Item key={item.name}>
                                <a onClick={() => {
                                    setSelectPosition(item);
                                }}>
                                    <List.Item.Meta
                                        className="custom-list-item-meta"
                                        title={item.name}
                                        description={item.formatted_address}
                                    />
                                </a>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>

            <div className="position-absolute bottom-0 mb-4 w-75">
                <img
                    className="w-100 "
                    src={searchBigBtn}
                    alt=""
                    onClick={async () => {
                        const queryString = new URLSearchParams(params).toString();
                        const resultRequest = await PlacesService.searchPlaces(queryString)
                        console.log(resultRequest)
                        setListPlaces(resultRequest)
                        console.log(listPlaces)
                    }}/>
            </div>
        </div>
    );
};

export default SearchBox;
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./header/Header";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Header/>}/>
            <Route exact path="/search" element={<Header/>}/>
        </Routes>
    );
};

export default AppRouter;
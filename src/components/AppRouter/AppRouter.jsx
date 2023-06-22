import React from 'react';
import {Route, Routes} from "react-router-dom";
import StartScreen from "../StartScreen/StartScreen";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<StartScreen/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;
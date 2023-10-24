import {Route, Routes} from "react-router-dom";

import React, {useState} from "react";
import './App.css';
import SideMenu from "../SideMenu/SideMenu";
import Main from "../Main/Main";
import AppLayout from "../AppLayout/AppLayout";

function App() {
    const [isSideMenuOpen, setSideMenuStatus] = useState(false);

    function handleOpenSideMenu() {
        setSideMenuStatus(!isSideMenuOpen);
    }

    function handleCloseSideMenu() {
        setSideMenuStatus(false);
    }

    return (
        <div className='app'>
            <Routes>
                <Route
                    path="/"
                    element={<AppLayout onBurgerButtonClick={handleOpenSideMenu}/>}
                >
                    <Route
                        index
                        element={<Main/>}
                    />
                </Route>
            </Routes>
            <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseSideMenu}/>
        </div>
    )
}

export default App;

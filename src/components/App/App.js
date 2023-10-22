import {Route, Routes} from "react-router-dom";

import React, {useState} from "react";
import './App.css';
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";

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
                 element={<Header onBurgerButtonClick={handleOpenSideMenu}/>}
             />
         </Routes>
         <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseSideMenu}/>
     </div>
 )
}

export default App;

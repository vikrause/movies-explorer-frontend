import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

export default function HeaderLayout({ onBurgerButtonClick }) {
    return (
        <>
            <Header onBurgerButtonClick={onBurgerButtonClick} />
            <Outlet />
        </>
    )
 }
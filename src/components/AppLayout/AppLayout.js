import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Outlet, useLocation} from "react-router-dom";

export default function AppLayout({ onBurgerButtonClick, isLoggedIn }) {
    const location = useLocation();
    return (
        <>
            <Header onBurgerButtonClick={onBurgerButtonClick} isLoggedIn={isLoggedIn} />
            <Outlet />
            {location.pathname !== "/profile" && <Footer />}
        </>
    )
 }
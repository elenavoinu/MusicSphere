import React from "react";
import logo from '../assets/logo.svg';
function NavBar() {
    return (
        <>
            <div id="navbar">
                <h1>Navbar</h1>
                <img src={logo} alt="Logo" />
            </div>
        </>
    );
}

export default NavBar;
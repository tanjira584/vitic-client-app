import React from "react";
import "./Header.css";
import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
            <ResponsiveHeader></ResponsiveHeader>
        </div>
    );
};

export default Header;

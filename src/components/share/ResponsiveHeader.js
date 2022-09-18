import React, { useState } from "react";
import "./Header.css";
import logo from "./../../images/logo2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faBars,
    faBarsStaggered,
    faShoppingCart,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const ResponsiveHeader = () => {
    const [cateMenu, setCateMenu] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    const handleCategoryMenu = () => {
        setCateMenu(!cateMenu);
    };
    const handleMobileMenu = () => {
        setMobile(!mobile);
    };
    return (
        <div className="responsive-header d-block d-lg-none">
            <div className="container-md">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        <div>
                            <FontAwesomeIcon
                                onClick={handleMobileMenu}
                                className="menu-icon"
                                icon={faBars}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="logo-icon">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <FontAwesomeIcon
                                onClick={handleCategoryMenu}
                                className="category-icon"
                                icon={faBarsStaggered}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="ms-3">
                            <FontAwesomeIcon
                                className="cart-icon"
                                icon={faShoppingCart}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu shadow ${mobile ? "active" : ""}`}>
                <button
                    onClick={handleMobileMenu}
                    className="m-0 w-100 text-end bg-dark text-light p-3"
                >
                    Close{" "}
                    <FontAwesomeIcon
                        className="ms-2"
                        icon={faTimes}
                    ></FontAwesomeIcon>
                </button>
                <div className="p-3">
                    <nav className="mobile-nav">
                        <ul className="">
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className=""
                                    aria-current="page"
                                    to="/products"
                                >
                                    Products
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>

                            {user && (
                                <li className="">
                                    <Link
                                        className=""
                                        aria-current="page"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faAngleRight}
                                        ></FontAwesomeIcon>
                                    </Link>
                                </li>
                            )}
                            {user ? (
                                <li className="">
                                    <button
                                        className=""
                                        onClick={handleSignOut}
                                    >
                                        Signout
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faAngleRight}
                                        ></FontAwesomeIcon>
                                    </button>
                                </li>
                            ) : (
                                <li className="">
                                    <Link
                                        className=""
                                        aria-current="page"
                                        to="/login"
                                    >
                                        Login/Register
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faAngleRight}
                                        ></FontAwesomeIcon>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`category-menu shadow ${cateMenu ? "active" : ""}`}>
                <button
                    onClick={handleCategoryMenu}
                    className="m-0 w-100 text-start bg-dark text-light p-3"
                >
                    Close{" "}
                    <FontAwesomeIcon
                        className="ms-2"
                        icon={faTimes}
                    ></FontAwesomeIcon>
                </button>
                <div className="p-3">
                    <nav className="mobile-nav">
                        <ul className="">
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Safety tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Power tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    plumbing tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    measurement tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    garden tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    electrical tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Decoration tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    cutting tools
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    className="active"
                                    aria-current="page"
                                    to="/"
                                >
                                    auto parts
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faAngleRight}
                                    ></FontAwesomeIcon>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveHeader;

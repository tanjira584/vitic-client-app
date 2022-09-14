import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./../../images/logo2.webp";

const HeaderMiddle = () => {
    return (
        <div className="header-middle d-none d-lg-block">
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center flex-column">
                        <div className="logo">
                            {" "}
                            <img
                                src={logo}
                                style={{ height: "35px", width: "inherit" }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-9 header-search-form d-flex align-items-center justify-content-end">
                        <div className="search-form w-50 flex-grow-1">
                            <div className="w-100">
                                <input type="search" name="" id="" />
                                <button>Search</button>
                            </div>
                        </div>
                        <div className="account-login  d-flex align-items-center justify-content-end">
                            <div>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faUser}
                                ></FontAwesomeIcon>
                            </div>
                            <div>
                                <p className="m-0">Hello</p>
                                <Link to="/login" className="">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                        <div className="top-cart ms-5  d-flex align-items-center justify-content-end">
                            <div>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faShoppingCart}
                                ></FontAwesomeIcon>
                            </div>
                            <div>
                                <p className="m-0">Shopping Cart</p>
                                <span className="">$ 0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;

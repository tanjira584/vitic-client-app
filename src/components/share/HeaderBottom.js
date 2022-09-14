import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import bg from "./../../images/bg-header.webp";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const HeaderBottom = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = (e) => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div
            style={{ backgroundColor: "#f3f3f3" }}
            className="d-none d-lg-block"
        >
            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }}
            >
                <div className="container-md">
                    <div className="row gx-5">
                        <div className="col-md-3">
                            <div
                                className="d-flex align-items-center justify-content-between"
                                style={{ padding: "14px" }}
                            >
                                <p
                                    className="m-0"
                                    style={{ fontWeight: "500" }}
                                >
                                    <FontAwesomeIcon
                                        className="me-3"
                                        icon={faBars}
                                    ></FontAwesomeIcon>{" "}
                                    All Departments
                                </p>
                                <span>
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                    ></FontAwesomeIcon>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="bottom-menu">
                                <nav className="navbar navbar-expand-lg p-0">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link
                                                className="active"
                                                aria-current="page"
                                                to="/"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className=""
                                                aria-current="page"
                                                to="/products"
                                            >
                                                Products
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className=""
                                                aria-current="page"
                                                to="/blogs"
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        {user ? (
                                            <li className="nav-item">
                                                <button
                                                    className="signout-btn bg-transparent"
                                                    onClick={handleSignOut}
                                                >
                                                    Signout
                                                </button>
                                            </li>
                                        ) : (
                                            <li className="nav-item">
                                                <Link
                                                    className=""
                                                    aria-current="page"
                                                    to="/login"
                                                >
                                                    Login/Register
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;

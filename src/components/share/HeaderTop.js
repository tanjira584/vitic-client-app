import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderTop = () => {
    return (
        <div className="bg-dark d-none d-lg-block">
            <div className="container-md">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <p className="m-0 text-secondary">
                            Customer Service:{" "}
                            <span
                                className="text-light"
                                style={{ fontSize: "14px" }}
                            >
                                88001613071257
                            </span>
                        </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <div>
                            <Link
                                to="/wishlist"
                                className="btn text-secondary"
                                style={{ fontSize: "12px" }}
                            >
                                WISHLIST
                            </Link>
                        </div>
                        <div className="ms-4 ps-3">
                            <div className="curreny py-2">
                                <p
                                    className="m-0  text-secondary"
                                    style={{ fontSize: "12px" }}
                                >
                                    CURRENCY{" "}
                                    <FontAwesomeIcon
                                        className="ms-1 fw-bold"
                                        icon={faCaretDown}
                                        style={{ fontSize: "16px" }}
                                    ></FontAwesomeIcon>
                                </p>
                            </div>
                        </div>
                        <div className="ms-4 ps-3">
                            <div className="language py-2">
                                <p
                                    className="m-0  text-secondary"
                                    style={{ fontSize: "12px" }}
                                >
                                    LANGUAGE{" "}
                                    <FontAwesomeIcon
                                        className="ms-1"
                                        style={{ fontSize: "16px" }}
                                        icon={faCaretDown}
                                    ></FontAwesomeIcon>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;

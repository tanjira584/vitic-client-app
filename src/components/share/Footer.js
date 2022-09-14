import React from "react";
import "./Footer.css";
import flogo from "./../../images/logo2.webp";
import payment from "./../../images/payment.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faLinkedinIn,
    faPinterest,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="border-top pt-4">
            <footer className="footer-top pt-5">
                <div className="container-md">
                    <div className="row g-4">
                        <div className="col-sm-6 col-md-3">
                            <div className="footer-address">
                                <div className="footer-logo mb-4">
                                    <img src={flogo} alt="" />
                                </div>
                                <ul>
                                    <li className="d-flex">
                                        <div className="me-3">
                                            <FontAwesomeIcon
                                                icon={faAddressBook}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                Victoria Co , 25 Silicon Road,
                                                London D14 89GM
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="me-3">
                                            <FontAwesomeIcon
                                                icon={faPhone}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                +84 04 567 8910 198
                                            </p>
                                            <p className="m-0">
                                                Mon-Fri 8:00 to 19:00
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="me-3">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                tanjira584@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="footer-box">
                                <h5>INFORMATION</h5>
                                <ul>
                                    <li>
                                        <a href=" ">About Us</a>
                                    </li>
                                    <li>
                                        <a href=" ">Customer Service</a>
                                    </li>
                                    <li>
                                        <a href=" ">Search Terms</a>
                                    </li>
                                    <li>
                                        <a href=" ">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href=" ">Order & Returns</a>
                                    </li>
                                    <li>
                                        <a href=" ">Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="footer-box">
                                <h5>WHY BUY FROM US</h5>
                                <ul>
                                    <li>
                                        <a href=" ">Shipping & Delivery</a>
                                    </li>
                                    <li>
                                        <a href=" ">Secure Payment</a>
                                    </li>
                                    <li>
                                        <a href=" ">Support</a>
                                    </li>
                                    <li>
                                        <a href=" ">Stores</a>
                                    </li>
                                    <li>
                                        <a href=" ">Services</a>
                                    </li>
                                    <li>
                                        <a href=" ">Returns</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="footer-box">
                                <h5 className="text-uppercase">Subscribe</h5>
                                <div>
                                    <p>
                                        Get E-mail updates about our latest shop
                                        and special offers.
                                    </p>
                                    <form>
                                        <input
                                            type="email"
                                            className="form-control mb-2 mt-3"
                                            placeholder="Enter Email"
                                        />
                                        <input
                                            type="submit"
                                            value="SUBSCRIBE"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-middle py-4">
                <div className="container-md">
                    <div className="d-md-flex align-items-center justify-content-between">
                        <div className="footer-social d-flex align-items-center justify-content-between mb-4 mb-md-0">
                            <span className="me-4 fw-bold d-inline-block">
                                Follow Us:{" "}
                            </span>
                            <ul className="m-0 p-0">
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faPinterest}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a href=" ">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                        ></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-payment d-flex align-items-center justify-content-between">
                            <span className="me-4 fw-bold d-inline-block">
                                Secure Payment:{" "}
                            </span>
                            <ul className="m-0 p-0">
                                <li>
                                    <img src={payment} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom  ">
                <div className="container-md">
                    <div className="d-md-flex align-items-center justify-content-between border-top py-4">
                        <div className="text-center  text-md-start">
                            <p className="m-0">
                                Copyright &copy; 2022 Tanjir. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="text-center text-md-end">
                            <ul className="footer-terms">
                                <li>
                                    <a href=" ">Terms of Service</a>
                                </li>
                                <li>
                                    <a href=" ">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href=" ">Supports</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

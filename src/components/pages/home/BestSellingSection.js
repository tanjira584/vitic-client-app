import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css";
import product1 from "./../../../images/product-1.jpg.webp";
import discount from "./../../../images/discount.webp";
import { Link } from "react-router-dom";
const BestSellingSection = () => {
    return (
        <div className="best-selling">
            <div className="container-md">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-info d-flex align-items-center justify-content-between">
                            <div>
                                <h4>best selling products</h4>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCaretLeft}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                        <hr />
                        <div className="product">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="img">
                                        <img src={product1} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="info">
                                        <span className="category text-muted">
                                            PLUMBING TOOL
                                        </span>
                                        <h2>plumbing tool one</h2>
                                        <p className="m-0">
                                            <span className="price">$40</span>{" "}
                                            <span className="piece text-muted">
                                                /Piece
                                            </span>
                                        </p>
                                        <p className="mb-3">
                                            <span className="quantity">20</span>{" "}
                                            <span className="min-order text-muted">
                                                (Min order)
                                            </span>
                                        </p>
                                        <ul>
                                            <li>
                                                Power and Durability: 15 Amp,
                                                4,000 Rpm Motor
                                            </li>
                                            <li>
                                                Adjustable Stainless Steel Miter
                                                Detent Plate with
                                            </li>
                                            <li>
                                                Cross Cut Capacity Up to 2×8
                                                Inch
                                            </li>
                                            <li>
                                                Bevels to the left up to 48° and
                                                to the right up to 3°
                                            </li>
                                        </ul>
                                        <div>
                                            <Link className="banner-btn" to="/">
                                                Buy Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="discount h-100 px-4 py-5"
                            style={{ backgroundImage: `url(${discount})` }}
                        >
                            <h3>SUBSCRIBE AND GET 20% OFF</h3>
                            <p>
                                Subscribe to our Newsletter and get bonuses
                                forthe next purchase
                            </p>
                            <form action="">
                                <input type="text" />
                                <input type="submit" value="SUBSCRIBE" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingSection;

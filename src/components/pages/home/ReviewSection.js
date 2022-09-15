import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
    faBuildingCircleArrowRight,
    faFileInvoiceDollar,
    faScrewdriverWrench,
    faStar,
    faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <div className="container-md py-5">
                <div className="py-4 business-counter">
                    <div className="row g-5">
                        <div className="col-md-3">
                            <div className="counter-box d-flex align-items-center justify-content-center">
                                <div className="img">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faBuildingCircleArrowRight}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="ms-3">
                                    <h2 className="">100+</h2>
                                    <h4>Distributers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-box d-flex align-items-center justify-content-center">
                                <div className="img">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faFileInvoiceDollar}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="ms-3">
                                    <h2 className="">120M +</h2>
                                    <h4>Annual revenue</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-box d-flex align-items-center justify-content-center">
                                <div className="img">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faScrewdriverWrench}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="ms-3">
                                    <h2 className="">70+</h2>
                                    <h4>Tools</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-box d-flex align-items-center justify-content-center">
                                <div className="img">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faMessage}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="ms-3">
                                    <h2 className="">12K+</h2>
                                    <h4>Reviews</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="p-4 review-section"
                    style={{ backgroundColor: "#F2F2F2" }}
                >
                    <div className="section-info d-flex align-items-center justify-content-between mb-4">
                        <div>
                            <h4>TESTIMONIAL. </h4>
                        </div>
                        <div className=" d-none d-md-flex align-items-center justify-content-between">
                            <ul className="m-0 p-0 star-list">
                                <li>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faStar}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faStar}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faStar}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faStar}
                                    ></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faStarHalfStroke}
                                    ></FontAwesomeIcon>
                                </li>
                            </ul>
                            <span className="ms-3">975 Reviews</span>
                        </div>
                    </div>
                    <div className="row g-5">
                        {reviews.slice(0, 3).map((review) => (
                            <div className="col-md-4" key={review._id}>
                                <div className="review h-100">
                                    <div className="d-flex aligin-items-center mb-2">
                                        <ul className="m-0 p-0 star-list">
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faStar}
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faStar}
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faStar}
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faStar}
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faStarHalfStroke}
                                                ></FontAwesomeIcon>
                                            </li>
                                        </ul>
                                        <span className="ms-3">03/11/2022</span>
                                    </div>
                                    <div className="mb-5">
                                        {" "}
                                        <h6>{review.company}</h6>
                                        <p className="mb-2">{review.desc}</p>
                                    </div>
                                    <div className="author">
                                        <span className="fw-bold text-mute">
                                            {review.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;

import React from "react";
import Category from "../../share/Category";
import "./Home.css";
import slide1 from "./../../../images/slide1.jpg";

const Banner = () => {
    return (
        <div className="mt-4">
            <div className="container-md">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Category></Category>
                    </div>
                    <div className="col-lg-9">
                        <div
                            className="slide p-4"
                            style={{
                                backgroundColor: "#F3F3F3",
                                height: "100%",
                            }}
                        >
                            <div className="row" style={{ height: "100%" }}>
                                <div className="col-md-7  height-100 d-flex flex-column justify-content-center">
                                    <div className="slide-content text-center text-md-start p-2 p-md-5">
                                        <h5 className="display-9">
                                            Combo Deals Power Tools
                                        </h5>
                                        <h2>
                                            OFFER 20{" "}
                                            <sup
                                                style={{ fontSize: "18px" }}
                                                className="display-9 text-muted"
                                            >
                                                % OFF
                                            </sup>
                                        </h2>
                                        <h5 className="mb-3">
                                            Circular Saw Tools Ace (Maintainance
                                            Kit)
                                        </h5>
                                        <h5 className="mb-4">
                                            Price:{" "}
                                            <span
                                                style={{ color: "#31b2ee" }}
                                                className=""
                                            >
                                                {" "}
                                                $200
                                            </span>
                                        </h5>
                                        <button className="banner-btn border-0 slider-btn">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-5  height-100  d-flex flex-column justify-content-center">
                                    <div className="img">
                                        <img
                                            style={{ width: "100%" }}
                                            src={slide1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

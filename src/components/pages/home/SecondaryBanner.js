import React from "react";
import { Link } from "react-router-dom";
import banner2 from "./../../../images/banner-3.jpg.webp";
import banner3 from "./../../../images/banner-4.jpg.webp";

const SecondaryBanner = () => {
    return (
        <div>
            <div className="container-md my-4">
                <div className="row">
                    <div className="col-md-6">
                        <div
                            className="banner-box "
                            style={{
                                backgroundImage: `url(${banner2})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="content p-5">
                                <h2 className="text-uppercase">
                                    huge selection
                                </h2>
                                <p className="m-0 mb-3 text-secondary">
                                    Cutting Exclusive Industries Tools
                                </p>
                                <Link to="/" className="banner-btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="banner-box"
                            style={{
                                backgroundImage: `url(${banner3})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="content p-5">
                                <h2 className="text-uppercase">
                                    top selling tools
                                </h2>
                                <p className="m-0 mb-3 text-secondary">
                                    Winter-Season Sale Up To 25% OFF
                                </p>
                                <Link to="/" className="banner-btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryBanner;

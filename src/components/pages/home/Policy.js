import React from "react";
import "./Home.css";
import icon1 from "../../../images/icon1.webp";
import icon2 from "../../../images/icon2.webp";
import icon3 from "../../../images/icon3.webp";
import icon4 from "../../../images/icon4.webp";

const Policy = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "#F2F2F2" }}>
            <div className="container-md py-5">
                <div className="row g-5">
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-2 text-uppercase">
                                    Free Delivery
                                </h5>
                                <h6>Free shipping on all order</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-2 text-uppercase">
                                    ONLINE SUPPORT 24/7
                                </h5>
                                <h6>Support online 24 hours</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-2 text-uppercase">
                                    MONEY RETURN
                                </h5>
                                <h6>Back guarantee under 7 days</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="policy-box d-flex align-items-center justify-content-center">
                            <div className="img">
                                <img src={icon4} alt="" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-2 text-uppercase">
                                    MEMBER DISCOUNT
                                </h5>
                                <h6>Onevery order over $30.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;

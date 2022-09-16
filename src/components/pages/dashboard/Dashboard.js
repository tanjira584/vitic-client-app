import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Dashboard.css";
import bg1 from "./../../../images/com-banner4.jpg";

const Dashboard = () => {
    const [admin, setAdmin] = useState(false);
    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <div
                    className=""
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="py-5 bg-dark opacity-75">
                        <h2 className="text-center fst-italic text-light py-4">
                            Welcome to dashboard
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard-sidebar  bg-dark opacity-75 py-4 border-top ">
                            <ul>
                                <li>
                                    <Link className="active" to="/dashboard">
                                        My Profile
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/my-order">
                                        My Orders
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/add-review">
                                        Add a Review
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/manage-user">
                                        Manage Users
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/manage-order">
                                        Manage Orders
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/manage-product">
                                        Manage Products
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/add-product">
                                        Add Product
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/signout">Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;

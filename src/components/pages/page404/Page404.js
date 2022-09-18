import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";
import bg from "../../../images/404.jpg";

const Page404 = () => {
    return (
        <div
            className="position-absolute w-100 h-100"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div>
                <div
                    className="content position-absolute start-50 top-50 text-center text-light"
                    style={{ transform: "translate(-50%,-50%)" }}
                >
                    <h2
                        className="fw-bolder opacity-25"
                        style={{ fontSize: "150px" }}
                    >
                        404
                    </h2>
                    <h4 className="mb-3">Oops!</h4>
                    <p className="mb-2">We're Sorry,</p>
                    <p>
                        The page you were looking for doesn't exist's anywhere.
                    </p>
                    <Link className="btn btn-outline-light" to="/">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;

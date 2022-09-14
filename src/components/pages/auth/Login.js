import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Login.css";
import {
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
    useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, euser, eloading] =
        useSignInWithEmailAndPassword(auth);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const [authuser, loading] = useAuthState(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const hanldeSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(user.email, user.password);
        e.target.reset();
        setUser({ email: "", password: "" });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };
    if (loading || eloading || gloading) {
        return <p className="text-center mt-5 pt-5">Loading....</p>;
    }
    if (authuser || euser || guser) {
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email: authuser.email }),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
            });
        return <Navigate to={from}></Navigate>;
    }
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5 my-md-5">
                <div className="login-form-box mx-auto border col-lg-6 py-4">
                    <div className="text-center">
                        <FontAwesomeIcon
                            className="icon"
                            icon={faRightToBracket}
                        ></FontAwesomeIcon>
                        <h2>Login</h2>
                    </div>
                    <div className="login-form">
                        <form onSubmit={hanldeSubmit}>
                            <div className="mb-3 input-box">
                                <label htmlFor="email" className="">
                                    Email address <span>*</span>
                                </label>
                                <input
                                    type="email"
                                    className=""
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-1  input-box">
                                <label htmlFor="email" className="">
                                    Password <span>*</span>
                                </label>
                                <input
                                    type="password"
                                    className=""
                                    id="password"
                                    name="password"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-flex align-items-center justify-content-between  mb-4">
                                <button type="reset">Forgot password?</button>
                                <Link to="/signup">Create Account</Link>
                            </div>
                            <div className="text-center">
                                <input type="submit" value="LOGIN" />
                            </div>
                        </form>
                        <div className="d-flex align-items-center my-4">
                            <div className="w-50 border"></div>
                            <div className="mx-4">OR</div>
                            <div className="w-50 border"></div>
                        </div>
                        <div className="">
                            <button
                                className="google-btn"
                                onClick={handleGoogleSignIn}
                            >
                                Continue With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;

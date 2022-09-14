import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Signup.css";
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
    useAuthState,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, euser, eloading, eerror] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const [authuser] = useAuthState(auth);
    const hanldeSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(user.email, user.password);
        await updateProfile({ displayName: user.name, photoURL: " " });
        e.target.reset();
        setUser({ name: "", email: "", password: "" });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };

    return (
        <div>
            <Header></Header>
            <div className="container-md py-5 my-md-5">
                <div className="signup-form-box mx-auto border col-lg-6 py-4">
                    <div className="text-center">
                        <FontAwesomeIcon
                            className="icon"
                            icon={faCircleUser}
                        ></FontAwesomeIcon>
                        <h2>Signup</h2>
                    </div>
                    <div className="signup-form">
                        <form onSubmit={hanldeSubmit}>
                            <div className="mb-3 input-box">
                                <label htmlFor="name" className="">
                                    User name <span>*</span>
                                </label>
                                <input
                                    type="name"
                                    className=""
                                    id="name"
                                    name="name"
                                    placeholder=""
                                    onChange={handleChange}
                                />
                            </div>
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
                            <div className=" mb-4">
                                <p className="m-0">
                                    Already have an account?{" "}
                                    <Link to="/login">Login here</Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <input type="submit" value="SIGNUP" />
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

export default Signup;

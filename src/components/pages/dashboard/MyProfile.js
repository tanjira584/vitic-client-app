import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const MyProfile = () => {
    const [myProfile, setMyProfile] = useState({});
    useEffect(() => {
        fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setMyProfile(data));
    }, []);
    return (
        <div className="m-2">
            <div className="profile">
                <div>
                    <h6>
                        Name:{" "}
                        <span className="fst-italic">{myProfile.name}</span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Email:{" "}
                        <span className="fst-italic">{myProfile.email}</span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Phone:{" "}
                        <span className="fst-italic">
                            {myProfile.phone || "016xxxxxxxx"}
                        </span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Location:{" "}
                        <span className="fst-italic">
                            {myProfile.location || "Brahmanbaria, Kasba, Deli"}
                        </span>
                    </h6>
                </div>
                <div>
                    <h6>
                        Education:{" "}
                        <span className="fst-italic">
                            {myProfile.education ||
                                "HSC-2015 (High School Certificate)"}
                        </span>
                    </h6>
                </div>
                <div className="mb-5">
                    <h6>
                        LinkedIn:{" "}
                        <span className="fst-italic">
                            {myProfile.link || "www.example.com"}
                        </span>
                    </h6>
                </div>
                <Link className="btn btn-primary" to="/dashboard/edit-profile">
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;

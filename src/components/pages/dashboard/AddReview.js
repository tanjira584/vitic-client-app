import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./Dashboard.css";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [review, setReview] = useState({
        name: user?.displayName,
        email: user?.email,
        company: "",
        desc: "",
        rating: 0,
    });
    const [error, setError] = useState(" ");
    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(review.rating) < 1) {
            setError("You Can't Rating Less Then 0");
            return;
        } else if (parseInt(review.rating) > 5) {
            setError("You Can't Rating More Than 5");
            return;
        } else {
            setError(" ");
        }
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ ...review }),
        })
            .then((res) => res.json())
            .then((data) => {
                toast("Got your quote successfully");
                e.target.reset();
                setReview({
                    name: user.displayName,
                    email: user.email,
                    company: "",
                    desc: "",
                    rating: 0,
                });
            });
    };
    return (
        <div className="m-2">
            <div className="border p-5">
                <h4>Review</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            name="name"
                            value={review.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Enter email</label>
                        <input
                            type="email"
                            name="email"
                            value={review.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={review.company}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating">Ratings*</label>
                        <input
                            type="number"
                            name="rating"
                            value={review.rating}
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className="m-0 text-danger">{error}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc">Give a Quote</label>
                        <textarea
                            name="desc"
                            className="form-control"
                            id=""
                            cols="30"
                            value={review.desc}
                            rows="4"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;

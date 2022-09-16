import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L3ZnoA6IBTGNGbPAsYSBjmafIRVn6qkspPMe1voZpkGPqJlR9eGHYu4CrHACqTarJ5NSwU6fZQIEztNHFEXifaf00zADiQ2Iy"
);

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    /*
    const url = `https://dry-forest-04223.herokuapp.com/order/${id}`;
    
    const { data: order, isLoading } = useQuery("order", () =>
        fetch(url, {
            method: "Get",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
     if (isLoading) {
        return <p className="text-center">Loading......</p>;
    }
    */

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "Get",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrder(data);
                setLoading(false);
            });
    }, [id]);
    if (loading) {
        return <p className="text-center mt-5">Loading....</p>;
    }

    return (
        <div className="py-3">
            <div className="row">
                <div className="col-md-7">
                    <div className="billing-address">
                        <h2>Billing Address</h2>
                        <div className="profile">
                            <div>
                                <h6>
                                    Name:{" "}
                                    <span className="fst-italic">
                                        {order.name}
                                    </span>
                                </h6>
                            </div>
                            <div>
                                <h6>
                                    Email:{" "}
                                    <span className="fst-italic">
                                        {order.email}
                                    </span>
                                </h6>
                            </div>
                            <div>
                                <h6>
                                    Phone:{" "}
                                    <span className="fst-italic">
                                        {order.phone || "016xxxxxxxx"}
                                    </span>
                                </h6>
                            </div>
                            <div>
                                <h6>
                                    Country:{" "}
                                    <span className="fst-italic">
                                        {order.country}
                                    </span>
                                </h6>
                            </div>
                            <div>
                                <h6>
                                    City:{" "}
                                    <span className="fst-italic">
                                        {order.city}
                                    </span>
                                </h6>
                            </div>
                            <div>
                                <h6>
                                    ZIP:{" "}
                                    <span className="fst-italic">
                                        {order.zip}
                                    </span>
                                </h6>
                            </div>
                            <div>
                                <h6>
                                    Quantity:{" "}
                                    <span className="fst-italic">
                                        {order.quantity}
                                    </span>
                                </h6>
                            </div>
                            <div className="">
                                <h6>
                                    Price per Piece:{" "}
                                    <span className="fst-italic">
                                        {order.price}
                                    </span>
                                </h6>
                            </div>
                            <div className="">
                                <h6>
                                    Total Coast:{" "}
                                    <span className="fst-italic">
                                        ${" "}
                                        {parseInt(order.quantity) *
                                            parseInt(order.price)}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <h2>Payment By Card</h2>
                    <div className="mb-4 shadow p-4 rounded">
                        <h4>Hello, Mr. Tanjir Ahmed</h4>
                        <h6>
                            Your Total Coast:{" "}
                            <span className="text-primary">
                                $
                                {parseInt(order.quantity) *
                                    parseInt(order.price)}
                            </span>
                        </h6>
                    </div>
                    <div className="shadow p-4">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order}></CheckoutForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { email, name, price, quantity } = order;
    /*
    useEffect(() => {
        fetch("http://localhost:5000/client-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);
    */
    if (Object.keys(order).length > 1) {
        fetch("http://localhost:5000/client-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
            console.log("hello");
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            const payment = {
                order: order._id,
                transactionId: paymentIntent.id,
            };
            fetch(`http://localhost:5000/order/${order._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({ ...payment }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    setSuccess("Congrates! Your payment in completed");
                    toast("Congrates! Your payment in completed");
                });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9c2146",
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-primary mt-3">
                    Pay
                </button>
            </form>
            {cardError && <p className="m-0">{cardError}</p>}
            {success && (
                <div className="text-success mt-3">
                    <p className="mb-2">{success}</p>
                    <p className="m-0">Your transaction Id: {transactionId}</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;

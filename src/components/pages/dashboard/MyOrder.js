import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);
    const handleCancel = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    const remain = orders.filter((order) => order._id !== id);
                    setOrders(remain);
                    toast("Order Delete Successfully");
                }
            });
    };
    return (
        <div className="m-2">
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Unite</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.prodName || order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {parseInt(order.quantity) *
                                        parseInt(order.price)}
                                </td>
                                <td>
                                    {order?.paid ? (
                                        <button className="btn btn-sm btn-success me-2">
                                            Paid
                                        </button>
                                    ) : (
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                            className="btn btn-sm btn-primary me-2"
                                        >
                                            Pay
                                        </Link>
                                    )}
                                    {order?.paid ? (
                                        <button className="btn btn-sm btn-warning ms-2">
                                            trnsId: 0384839ddhs383
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleCancel(order._id)
                                            }
                                            className="btn btn-sm btn-danger"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;

import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    if (loading) {
        fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }
    const handleRollUpdate = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ role: "admin" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("User Promoted Successfully");
                    setLoading(true);
                }
            });
    };
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Order Delete Successfully");
                    setLoading(true);
                }
            });
    };
    if (loading) {
        return <p className="text-center mt-5">Loading....</p>;
    }
    return (
        <div className="m-2">
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Promote</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.email}</td>
                                <td className="fst-bold">
                                    <span className="fw-bold text-success">
                                        {user.role === "admin"
                                            ? "Admin"
                                            : "User"}
                                    </span>
                                </td>

                                <td>
                                    <button
                                        onClick={() =>
                                            handleRollUpdate(user.email)
                                        }
                                        className="btn btn-sm btn-primary me-2"
                                        disabled={
                                            user.role === "admin" ? true : false
                                        }
                                    >
                                        MAKE ADMIN
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-sm btn-danger"
                                        disabled={
                                            user.role === "admin" ? true : false
                                        }
                                    >
                                        DELETE USER
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ManageUsers;

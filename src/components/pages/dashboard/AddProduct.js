import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
    const [product, setProduct] = useState({
        category: "",
        name: "",
        img: "",
        desc: "",
        min: 0,
        stock: 0,
        price: 0,
        quantity: 0,
    });
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ ...product }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Product Added Successfully");
                    e.target.reset();
                    setProduct({
                        category: "",
                        name: "",
                        img: "",
                        desc: "",
                        min: 0,
                        stock: 0,
                        price: 0,
                        quantity: 0,
                    });
                }
            });
    };
    return (
        <div className="m-2">
            <div className="border p-5">
                <h4>Add New Product</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label htmlFor="price">Price*</label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3  col-md-6">
                            <label htmlFor="stock">Stock*</label>
                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="min">Min Order*</label>
                            <input
                                type="number"
                                name="min"
                                value={product.min}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="quantity">Quantity*</label>
                            <input
                                type="number"
                                name="quantity"
                                value={product.quantity}
                                onChange={handleChange}
                                className="form-control"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img">Image Url*</label>
                        <input
                            type="text"
                            name="img"
                            value={product.img}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc">Give a Quote</label>
                        <textarea
                            name="desc"
                            className="form-control"
                            id=""
                            cols="30"
                            rows="4"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Add New Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;

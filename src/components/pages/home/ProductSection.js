import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import banner5 from "./../../../images/banner-5.webp";

const ProductSection = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    const handleProduct = (product) => {
        localStorage.setItem("product", product._id);
    };

    return (
        <div className="product-section py-5">
            <div className="container-md">
                <div className="section-title">
                    <h2>Vitic Feature Tools</h2>
                    <hr />
                </div>
                <div className="row g-5">
                    {products.slice(0, 8).map((product) => (
                        <div className="col-md-3 col-sm-6" key={product._id}>
                            <div className="product-box">
                                <div className="img mb-2 position-relative">
                                    <img
                                        src={product.img}
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                    <div className="purchase-btn">
                                        <Link
                                            className=""
                                            to="/purchase"
                                            onClick={() =>
                                                handleProduct(product)
                                            }
                                        >
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                        }}
                                        className="text-uppercase text-muted mb-3 category"
                                    >
                                        {product.category}
                                    </span>
                                    <h5 className="mb-2">{product.name}</h5>

                                    <div>
                                        <span className="price">
                                            ${product.price}
                                        </span>{" "}
                                        <span className="text-muted piece">
                                            / Piece
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <span className="quantity ">
                                            {product.min}
                                        </span>{" "}
                                        <span className="text-muted min-order">
                                            (Min Order)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="secondary-banner"
                    style={{ backgroundImage: `url(${banner5})` }}
                >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content text-center">
                                <h3>HAND TOOL BRANDS</h3>
                                <p>
                                    Power Tools, Good Tools, Top Tools, Best
                                    Tools, Corona, Hary Tool
                                </p>
                                <Link className="banner-btn" to="/">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;

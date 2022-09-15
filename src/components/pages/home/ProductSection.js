import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const ProductSection = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    console.log(products);
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
                                        <Link className="" to="/purchase">
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
                                        <span className="quantity">
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
            </div>
        </div>
    );
};

export default ProductSection;

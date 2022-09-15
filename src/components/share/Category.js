import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
    return (
        <div className="categories">
            <ul className="">
                <li className="category-heading">Products Categories</li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        Safety tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        Power tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        plumbing tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        measurement tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        garden tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        electrical tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        Decoration tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        cutting tools
                    </Link>
                </li>
                <li className="">
                    <Link className="active" aria-current="page" to="/">
                        auto parts
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Category;

import React from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div style={{ height: "500px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

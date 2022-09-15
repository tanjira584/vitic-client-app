import React from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import Banner from "./Banner";
import ProductSection from "./ProductSection";
import SecondaryBanner from "./SecondaryBanner";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SecondaryBanner></SecondaryBanner>
            <ProductSection></ProductSection>
            <div style={{ height: "500px" }}></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

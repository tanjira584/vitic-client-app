import React from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import Banner from "./Banner";
import BestSellingSection from "./BestSellingSection";
import Policy from "./Policy";
import ProductSection from "./ProductSection";
import ReviewSection from "./ReviewSection";
import SecondaryBanner from "./SecondaryBanner";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SecondaryBanner></SecondaryBanner>
            <ProductSection></ProductSection>
            <BestSellingSection></BestSellingSection>
            <ReviewSection></ReviewSection>
            <Policy></Policy>
            <Footer></Footer>
        </div>
    );
};

export default Home;

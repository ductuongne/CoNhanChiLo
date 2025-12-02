import React from "react";
import HeroSection from "../components/layouts/HeroSection/HeroSection.jsx";
import FeatureSection from "../components/layouts/FeatureSecion/FeatureSection.jsx";
import ContactSection from "../components/layouts/ContactSection/ContactSection.jsx";
import Footer from "../components/layouts/Footer/Footer.jsx";
import Header from "../components/layouts/Header/Header.jsx";
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FeatureSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home;
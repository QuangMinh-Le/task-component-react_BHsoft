import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Background from "./components/background/Background";
import MainSlider from "./components/mainSlider/MainSlider";
import CoreService from "./components/coreService/CoreService";
import AboutUs from "./components/aboutUs/AboutUs";
import ProfessionalTeam from "./components/professionalTeam/ProfessionalTeam";
import ContactUs from "./components/contactUs/ContactUs";

const App = () => (
    <div>
        <Header/>
        <MainSlider/>
        <CoreService/>
        <AboutUs/>
        <ProfessionalTeam/>
        <ContactUs/>
        <Footer/>
        <Background/>
    </div>
);

export default App;

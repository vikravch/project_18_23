import React from 'react';
import Footer from "../footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import MainPageValues from "../../../modules/home_page/presentation/page/mainPageValues/MainPageValues";
import ContactUsSection from "./ContactUsSection";

const ContactUs = () => {
    return (
        <div>
            <AboutUs/>
            <ContactUsSection/>
            <MainPageValues/>
            <Footer/>
        </div>

    );
};

export default ContactUs;
import React from 'react';
import style from './homePage.module.css'
import MainPageSlider from "./mainPageSlider/MainPageSlider";
import MainPageBanner from "./mainPageBanner/MainPageBanner";
import MainPageCarousel from "./mainPageCarousel/MainPageCarousel";
import MainPageValues from "./mainPageValues/MainPageValues";
import Discount from "../components/new_lower_prices/Discount";
import Articles from "../components/articles/Articles";
import NewsletterSubscribe from "../../../../general/components/newsletter_subscribe/NewsletterSubscribe";
import Footer from "../../../../general/components/footer/Footer";

function HomePage() {
    return (
        <div className={style.main_wrapper}>
            <MainPageSlider/>
            <MainPageBanner/>
            <MainPageCarousel/>
            <MainPageValues/>
            <Discount/>
            <Articles/>
            <NewsletterSubscribe/>
            <Footer/>
        </div>
    );
}

export default HomePage;

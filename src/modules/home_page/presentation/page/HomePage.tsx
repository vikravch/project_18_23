import React from 'react';
import style from './homePage.module.css'
import MainPageSlider from "./mainPageSlider/MainPageSlider";
import MainPageBanner from "./mainPageBanner/MainPageBanner";
import MainPageCarousel from "./mainPageCarousel/MainPageCarousel";
import MainPageValues from "./mainPageValues/MainPageValues";

function HomePage() {
    return (
        <div className={style.main_wrapper}>
            <MainPageSlider/>
            <MainPageBanner/>
            <MainPageCarousel/>
            <MainPageValues/>

        </div>
    );
}

export default HomePage;

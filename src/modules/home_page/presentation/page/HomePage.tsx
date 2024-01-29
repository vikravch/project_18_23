import React from 'react';
import style from './homePage.module.css'
import MainPageSlider from "./MainPageSlider/MainPageSlider";
import MainPageBanner from "./MainPageBanner/MainPageBanner";
import MainPageCarousel from "./MainPageCarousel/MainPageCarousel";
import MainPageValues from "./MainPageValues/MainPageValues";


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

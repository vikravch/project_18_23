import React from 'react';
import style from "../homePage.module.css";
import sofa from "../imgMainPage/main_sofa.jpg";
import arrow_left from "../imgMainPage/arrow-left.svg";
import arrow_right from "../imgMainPage/arrow-right.svg";

const MainPageSlider = () => {
    return (
        <div>
            <div className={style.slider_wrapper}>
                <div className={style.slider}>
                    <img src={sofa} alt='Main_img'/>
                    <div className={`${style.arrow}  ${style.left}`}>
                        <img src={arrow_left} alt='Arrow_left'/>
                    </div>
                    <div className={`${style.arrow}  ${style.right}`}>
                        <img src={arrow_right} alt='Arrow_right'/>
                    </div>
                </div>
                <div className={style.slider_header}>
                    <p className={style.slider_text}>Simply Unique<span>/</span> Simply Better<span>.</span></p>
                    <p className={style.slider_disclaimer}>
                        <span className={style.bold}>3legant</span> is a gift & decorations store based in HCMC,
                        Vietnam. Est since 2019.</p>
                </div>
            </div>
        </div>
    );
};

export default MainPageSlider;
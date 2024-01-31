import React from 'react';
import styles from './slider.module.css'
import sofa from "../imgMainPage/main_sofa.jpg";
import arrow_left from "../imgMainPage/arrow-left.svg";
import arrow_right from "../imgMainPage/arrow-right.svg";
import sofa_small from '../imgMainPage/sofa_small.jpg'

const MainPageSlider = () => {
    return (
        <div>
            <div className={styles.slider_wrapper}>
                <div className={styles.slider}>
                    <img className={styles.sofa} src={sofa} alt='Main_img'/>
                    <img className={styles.sofa_small} src={sofa_small} alt='Main_img_small'/>

                    <div className={`${styles.arrow}  ${styles.left}`}>
                        <img src={arrow_left} alt='Arrow_left'/>
                    </div>
                    <div className={`${styles.arrow}  ${styles.right}`}>
                        <img src={arrow_right} alt='Arrow_right'/>
                    </div>
                </div>
                <div className={styles.slider_header}>
                    <p className={styles.slider_text}>Simply Unique<span>/</span> Simply Better<span>.</span></p>
                    <p className={styles.slider_disclaimer}>
                        <span className={styles.bold}>3legant</span> is a gift & decorations store based in HCMC,
                        Vietnam. Est since 2019.</p>
                </div>
            </div>
        </div>
    );
};

export default MainPageSlider;
import React from 'react';
import "./AboutUs.module.css";
import paste_image from '../../../../modules/home_page/presentation/components/new_lower_prices/paste_image.png';
import styles from './AboutUs.module.css';
import ArrowRight from "../../../../modules/home_page/presentation/components/new_lower_prices/ArrowRight";
const AboutUs = () =>
{
    return (
        <div className={styles.aboutUs_wrapper}>
            <div className={styles.aboutUs_wrapper_inner}>
                <img className={styles.image_placeholder} src={paste_image} alt="paste_image"/>
                <div className={styles.aboutUs_section}>
                    <div className={styles.aboutUs_section_padding}>
                        <h5 className={styles.titleAboutUs}>About Us</h5>
                        <p className={styles.textAboutUs}>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                            Our customer service is always prepared to support you 24/7</p>
                        <div className={styles.shop_now_link}>
                            <div className={styles.shop_now_btn_aboutUs}>Shop Now</div>
                            <ArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;
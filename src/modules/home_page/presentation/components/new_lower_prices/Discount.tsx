import React from 'react';
import "./Discount.module.css";
import paste_image from './paste_image.png';
import ArrowRight from "./ArrowRight";
import styles from './Discount.module.css';
const Discount = () =>
{
    return (
        <div className={styles.discount_wrapper}>
            <div className={styles.discount_wrapper_inner}>
                <img className={styles.image_placeholder_discount} src={paste_image} alt="paste_image"/>
                <div className={styles.discount_section}>
                    <div className={styles.discount_section_padding}>
                        <div className={styles.sale_banner}>SALE UP TO 35% OFF</div>
                        <h5 className={styles.titleDiscount}>HUNDREDS of <br/>New lower prices!</h5>
                        <p className={styles.textDiscount}>It’s more affordable than ever to give every room in your home a
                            stylish makeover</p>
                        <div className={styles.shop_now_link}>
                            <div className={styles.shop_now_btn}>Shop Now</div>
                            <ArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Discount;
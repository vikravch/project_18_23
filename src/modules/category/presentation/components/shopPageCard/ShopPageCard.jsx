import React from 'react';
import styles from "./ShopPageCard.module.css";
import sofa from "./images/loveseatsofa.png";
import RatingBar from "./RatingBar";

const ShopPageCard = () => {
    return (
        <div className={styles.product_card}>
            <div className={styles.card_content}>
                <div className={styles.content_textprice}>
                    <RatingBar/>
                    <div className={styles.rating_text}>Loveseat Sofa</div>
                    <div className={styles.price_wrapper}>
                        <div className={styles.price1}>$199.00</div>
                        <div className={styles.price2}>$400.00</div>
                    </div>
                </div>
            </div>
            <div className={styles.card_element}>
                <div className={styles.badges}>
                    <div className={styles.badge_higher}>NEW</div>
                    <div className={styles.badge_lower}>-50%</div>

                </div>
                <div className={styles.addwishlist}>
                    <div className={styles.iconwishlist}>
                        <div className={styles.shapewishlist}></div>
                    </div>
                </div>
                <div className={styles.buttonhover}>
                    <div className={styles.buttonhovertext}>Add to cart</div>
                </div>
                <div className={styles.card_image}>
                    <img className={styles.card_image} src={sofa}/>
                </div>
            </div>
        </div>
    );
};

export default ShopPageCard;
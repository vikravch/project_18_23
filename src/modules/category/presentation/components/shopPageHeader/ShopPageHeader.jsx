import React from 'react';
import styles from "./ShopPageHeader.module.css";
import image from './images/headerpic.webp'
import LinkGroupHeader from "./LinkGroupHeader";

const ShopPageHeader = () => {
    return (
        <div className={styles.shopPageHeader}>
            <div className={styles.imageHolder}>
                <div className={styles.textBoxPageHeader}>
                    <LinkGroupHeader/>
                    <h3 className={styles.textHeader}>Shop Page</h3>
                    <div className={styles.textHeaderLower}>Let’s design the place you always imagined.</div>
                </div>
            </div>
        </div>


    );
};

export default ShopPageHeader;
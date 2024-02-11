import React from 'react';
import styles from "./LinkGroupHeader.module.css";

const LinkGroupHeader = () => {
    return (
        <div className={styles.linkGroup}>
            <a className={styles.btn_home} href={"/"}>
                <div className={styles.linkText1}>Home</div>
                <div className={styles.icon_chevron_right}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58423 3L7.58423 6L4.58423 9" stroke="#605F5F" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </a>
            <div className={styles.btnShop}>
                <div className={styles.linkText3}>Shop</div>
            </div>
        </div>
    );
};

export default LinkGroupHeader;
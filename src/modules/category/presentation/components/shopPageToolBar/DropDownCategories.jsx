import React from 'react';
import styles from "./ShopPageToolBar.module.css";

const DropDownCategories = () => {
    return (
        <div className={styles.dropdown_main}>
            <p>CATEGORIES</p>
            <div className={styles.dropdown_inner}>
                <div className={styles.dropdown_text}>Living Room</div>
                <div className={styles.dropdown_button}>
                    <div className={styles.dropdown_button_icon}>
                        <i className={styles.dropdown_button_icon_shape}>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
                                      fill="#6C7275"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DropDownCategories;
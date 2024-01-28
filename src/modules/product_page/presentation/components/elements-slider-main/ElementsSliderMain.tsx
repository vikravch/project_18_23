import React from 'react';
import styles from './ElementsSliderMain.module.css';
import ElementsSliderMainItem from "../elements-slider-main-item/ElementsSliderMainItem";

const ElementsSliderMain = () => {
    return (
        <div className={styles.item}>
            <ElementsSliderMainItem/>
        </div>
    );
};

export default ElementsSliderMain;
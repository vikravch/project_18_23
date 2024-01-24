import React from 'react';
import styles from './ElementsSliderMain.module.css';
import ElementsSliderMainItem from "../elements-slider-main-item/ElementsSliderMainItem";
import ElementsSliderMainItemBadge1 from "../elements-slider-main-item-badge1/ElementsSliderMainItemBadge1";
import ElementsSliderMainItemBadge2 from "../elements-slider-main-item-badge2/ElementsSliderMainItemBadge2";
import ElementsSliderArrows from "../elements-slider-arrows/ElementsSliderArrows";

const ElementsSliderMain = () => {
    return (
        <div className={styles.item}>
            <ElementsSliderMainItem/>
        </div>
    );
};

export default ElementsSliderMain;
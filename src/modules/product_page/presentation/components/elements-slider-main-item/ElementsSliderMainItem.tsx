import React from 'react';
import styles from './ElementsSliderMainItem.module.css';
import ElementsSliderMainItemBadge1 from "../elements-slider-main-item-badge1/ElementsSliderMainItemBadge1";
import ElementsSliderMainItemBadge2 from "../elements-slider-main-item-badge2/ElementsSliderMainItemBadge2";
import ElementsSliderArrows from "../elements-slider-arrows/ElementsSliderArrows";

const ElementsSliderMainItem = () => {
    return (
        <div className={styles.item}>
            {/*<img src={image} className={styles.img} alt={image}/>*/}
            <ElementsSliderMainItemBadge1/>
            <ElementsSliderMainItemBadge2/>
            <ElementsSliderArrows/>
        </div>
    );
};

export default ElementsSliderMainItem;
import React from 'react';
import styles from './ElementsSliderArrows.module.css';
import ElementsSliderArrowsButton1 from "../elements-slider-arrows-button1/ElementsSliderArrowsButton1";
import ElementsSliderArrowsButton2 from "../elements-slider-arrows-button2/ElementsSliderArrowsButton2";

const ElementsSliderArrows = () => {
    return (
        <div className={styles.base}>
            <ElementsSliderArrowsButton1/>
            <ElementsSliderArrowsButton2/>
        </div>
    );
};

export default ElementsSliderArrows;
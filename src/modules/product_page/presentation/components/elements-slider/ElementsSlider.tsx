import React from 'react';
import ElementsSliderArea from "../elements-slider-area/ElementsSliderArea";
import styles from './ElementsSlider.module.css';
import ElementsSliderMain from "../elements-slider-main/ElementsSliderMain";

const ElementsSlider = () => {
    return (
        <div className={styles.slider}>
            <ElementsSliderMain/>
            <ElementsSliderArea/>
        </div>
    );
};

export default ElementsSlider;
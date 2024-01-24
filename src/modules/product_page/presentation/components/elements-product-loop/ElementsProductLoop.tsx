import React from 'react';
import styles from './ElementsProductLoop.module.css';
import ElementsSlider from "../elements-slider/ElementsSlider";
import ElementsProductLoopContent from "../elements-product-loop-content/ElementsProductLoopContent";

const ElementsProductLoop = () => {
    return (
        <div className={styles.base}>
            <ElementsSlider/>
            <ElementsProductLoopContent/>
        </div>
    );
};

export default ElementsProductLoop;
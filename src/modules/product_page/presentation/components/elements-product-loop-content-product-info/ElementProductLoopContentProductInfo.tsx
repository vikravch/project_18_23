import React from 'react';
import styles from './ElementProductLoopContentProductInfo.module.css';
import ElementsProductLoopContentProductInfoInfo
    from "../elements-product-loop-content-product-info-info/ElementsProductLoopContentProductInfoInfo";
import ElementsProductLoopTimer from "../elements--product-loop-timer/ElementsProductLoopTimer";
import ElementsSwatches from "../elements--swatches/ElementsSwatches";

const ElementProductLoopContentProductInfo = () => {
    return (
        <div className={styles.base}>
            <ElementsProductLoopContentProductInfoInfo/>
            <ElementsProductLoopTimer/>
            <ElementsSwatches/>
        </div>
    );
};

export default ElementProductLoopContentProductInfo;
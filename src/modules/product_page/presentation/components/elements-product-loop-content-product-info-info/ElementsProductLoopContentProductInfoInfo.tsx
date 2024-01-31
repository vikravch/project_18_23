import React from 'react';
import styles from './ElementsProductLoopContentProductInfoInfo.module.css';
import ElementsProductLoopContentProductInfoInfoFrame10
    from "../elements-product-loop-content-product-info-info-frame10/ElementsProductLoopContentProductInfoInfoFrame10";
import ElementsProductLoopContentProductInfoInfoPrice
    from "../elements-product-loop-content-product-info-info-price/ElementsProductLoopContentProductInfoInfoPrice";

const ElementsProductLoopContentProductInfoInfo = () => {
    return (
        <div className={styles.base}>
            <ElementsProductLoopContentProductInfoInfoFrame10/>
            <div className={styles.title}>Tray Table</div>
            <div className={styles.text}>Buy one or buy a few and make every space where you sit more convenient. Light
                and easy to move around with removable tray top, handy for serving snacks.</div>
            <ElementsProductLoopContentProductInfoInfoPrice/>
        </div>
    );
};

export default ElementsProductLoopContentProductInfoInfo;
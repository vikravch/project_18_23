import React from 'react';
import styles from './ElementsProductLoopContent.module.css';
import ElementProductLoopContentProductInfo
    from "../elements-product-loop-content-product-info/ElementProductLoopContentProductInfo";
import ElementsCart from "../elements--cart/ElementsCart";
import ElementsMeta from "../elements--meta/ElementsMeta";

const ElementsProductLoopContent = () => {
    return (
        <div className={styles.base}>
            <ElementProductLoopContentProductInfo/>
            <ElementsCart/>
            <ElementsMeta/>
        </div>
    );
};

export default ElementsProductLoopContent;
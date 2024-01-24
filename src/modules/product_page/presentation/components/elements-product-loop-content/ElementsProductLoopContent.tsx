import React from 'react';
import styles from './ElementsProductLoopContent.module.css';
import ElementProductLoopContentProductInfo
    from "../elements-product-loop-content-product-info/ElementProductLoopContentProductInfo";

const ElementsProductLoopContent = () => {
    return (
        <div className={styles.base}>
            <ElementProductLoopContentProductInfo/>
        </div>
    );
};

export default ElementsProductLoopContent;
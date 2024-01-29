import React from 'react';
import styles from './Product.module.css';
import ElementsProductLoopMain from "./elements-product-loop-main/ElementsProductLoopMain";


const Product = () => {
    return (
        <div className={styles.base}>
            <ElementsProductLoopMain/>
        </div>
    );
};

export default Product;

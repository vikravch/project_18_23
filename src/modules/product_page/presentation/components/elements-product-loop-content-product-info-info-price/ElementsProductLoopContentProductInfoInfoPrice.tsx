import React from 'react';
import styles from './ElementsProductLoopContentProductInfoInfoPrice.module.css';

const ElementsProductLoopContentProductInfoInfoPrice = () => {
    return (
        <div className={styles.base}>
            <p className={styles.price}>$199.00</p>
            <p className={styles.sale}>$400.00</p>
        </div>
    );
};

export default ElementsProductLoopContentProductInfoInfoPrice;
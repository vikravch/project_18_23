import React from 'react';
import styles from './ElementsProductLoopContentProductInfoInfoPrice.module.css';

const ElementsProductLoopContentProductInfoInfoPrice = () => {
    return (
        <div className={styles.base}>
            <div className={styles.price}>$199.00</div>
            <div className={styles.sale}>$400.00</div>
        </div>
    );
};

export default ElementsProductLoopContentProductInfoInfoPrice;
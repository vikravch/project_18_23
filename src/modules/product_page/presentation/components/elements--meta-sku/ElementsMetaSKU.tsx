import React from 'react';
import styles from './ElementsMetaSku.module.css';

const ElementsMetaSku = () => {
    return (
        <div className={styles.base}>
            <div className={styles.sku}>SKU</div>
            <div className={styles.text}>1117</div>
        </div>
    );
};

export default ElementsMetaSku;
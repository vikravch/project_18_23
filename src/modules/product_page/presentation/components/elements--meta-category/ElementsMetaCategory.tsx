import React from 'react';
import styles from './ElementsMetaCategory.module.css';

const ElementsMetaCategory = () => {
    return (
        <div className={styles.base}>
            <div className={styles.category}>CATEGORY</div>
            <div className={styles.text}>Living Room, Bedroom</div>
        </div>
    );
};

export default ElementsMetaCategory;
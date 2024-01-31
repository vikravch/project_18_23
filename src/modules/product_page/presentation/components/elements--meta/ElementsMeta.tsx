import React from 'react';
import styles from './ElementsMeta.module.css';
import ElementsMetaSKU from "../elements--meta-sku/ElementsMetaSKU";
import ElementsMetaCategory from "../elements--meta-category/ElementsMetaCategory";

const ElementsMeta = () => {
    return (
        <div className={styles.base}>
            <ElementsMetaSKU/>
            <ElementsMetaCategory/>
        </div>
    );
};

export default ElementsMeta;
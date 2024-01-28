import React from 'react';
import styles from './ElementsSwatches.module.css';
import ElementsSwatchesInfo from "../elements--swatches-info/ElementsSwatchesInfo";
import ElementsColor from "../elements--color/ElementsColor";

const ElementsSwatches = () => {
    return (
        <div className={styles.base}>
            <ElementsSwatchesInfo title={'Measurements'} size={'17 1/2x20 5/8 "'}/>
            <ElementsColor/>
        </div>
    );
};

export default ElementsSwatches;
import React from 'react';
import styles from './ElementsColor.module.css';
import ElementsColorInfo from "../elements--color-info/ElementsColorInfo";
import ElementsColorGroupImages from "../elements--color-group-images/ElementsColorGroupImages";

const ElementsColor = () => {
    return (
        <div className={styles.base}>
            <ElementsColorInfo color={'BLACK'}/>
            <ElementsColorGroupImages/>
        </div>
    );
};

export default ElementsColor;
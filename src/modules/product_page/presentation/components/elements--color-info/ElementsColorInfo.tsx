import React from 'react';
import styles from './ElementsColorInfo.module.css';
import ElementsColorInfoFrame11 from "../elements--color-info-frame11/ElementsColorInfoFrame11";

interface Props {
    color: string
}

const ElementsColorInfo = ({color}: Props) => {
    return (
        <div className={styles.base}>
            <ElementsColorInfoFrame11/>
            <div className={styles.color}>{color}</div>
        </div>
    );
};

export default ElementsColorInfo;
import React from 'react';
import styles from './ElementsSwatchesInfo.module.css';

interface Props{
    title: string
    size: string
}
const ElementsSwatchesInfo = ({title, size}: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.title}>{title}</div>
            <div className={styles.size}>{size}</div>
        </div>
    );
};

export default ElementsSwatchesInfo;
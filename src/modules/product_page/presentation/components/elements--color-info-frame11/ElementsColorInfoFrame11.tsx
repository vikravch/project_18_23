import React from 'react';
import styles from './ElementsColorInfoFrame11.module.css';
import image from './images/directionRight01.svg';

const ElementsColorInfoFrame11 = () => {
    return (
        <div className={styles.base}>
            <div className={styles.chColor}>Choose Color</div>
            <img src={image} className={styles.img} alt={image}/>
        </div>
    );
};

export default ElementsColorInfoFrame11;
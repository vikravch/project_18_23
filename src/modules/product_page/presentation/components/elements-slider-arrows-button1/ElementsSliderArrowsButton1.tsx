import React from 'react';
import styles from './ElementsSliderArrowsButton1.module.css';
import image from './images/arrow-left.svg';

const ElementsSliderArrowsButton1 = () => {
    return (
        <div className={styles.button}>
            <img className={styles.img} src={image} alt={image}/>
        </div>
    );
};

export default ElementsSliderArrowsButton1;
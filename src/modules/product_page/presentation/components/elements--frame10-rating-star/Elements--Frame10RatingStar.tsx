import React from 'react';
import styles from './ElementsFrame10RatingStar.module.css';
import image from './images/StarIcon.svg';

const ElementsFrame10RatingStar = () => {
    return (
        <div className={styles.base}>
            <img src={image} alt={image}/>
        </div>
    );
};

export default ElementsFrame10RatingStar;
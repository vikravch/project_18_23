import React from 'react';
import image1 from './images/PasteImage1.png';
import image2 from './images/PasteImage2.png';
import image3 from './images/PasteImage3.png';
import styles from './ElementsSliderArea.module.css';

const ElementsSliderArea = () => {
    return (
        <div className={styles.area}>
            <img src={image1} className={styles.img} alt={image1}/>
            <img src={image2} className={styles.img} alt={image2}/>
            <img src={image3} className={styles.img} alt={image3}/>
        </div>
    );
};

export default ElementsSliderArea;
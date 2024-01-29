import React from 'react';
import styles from './ElementsColorGroupImages.module.css';
import image1 from './images/PasteImage1.png';
import image2 from './images/PasteImage2.png';
import image3 from './images/PasteImage3.png';
import image4 from './images/PasteImage4.png';

const ElementsColorGroupImages = () => {
    return (
        <div className={styles.base}>
            <img src={image1} className={styles.img} alt={image1}/>
            <img src={image2} className={styles.img} alt={image2}/>
            <img src={image3} className={styles.img} alt={image3}/>
            <img src={image4} className={styles.img} alt={image4}/>
        </div>
    );
};

export default ElementsColorGroupImages;
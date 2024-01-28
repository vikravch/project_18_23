import React from 'react';
import styles from './ElementsButtonsWishlist.module.css';
import image from './images/Line.svg';

const ElementsButtonsWishlist = () => {
    return (
        <div className={styles.base}>
            <img className={styles.img} src={image} alt={image}/>
            <div className={styles.wishlist}>Wishlist</div>
        </div>
    );
};

export default ElementsButtonsWishlist;
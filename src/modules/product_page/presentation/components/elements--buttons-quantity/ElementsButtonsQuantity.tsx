import React from 'react';
import styles from './ElementsButtonsQuantity.module.css';
import ElementsQuantityButtons from "../elements--quantity-buttons/ElementsQuantityButtons";
import ElementsButtonsWishlist from "../elements--buttons-wishlist/ElementsButtonsWishlist";

const ElementsButtonsQuantity = () => {
    return (
        <div className={styles.base}>
            <ElementsQuantityButtons/>
            <ElementsButtonsWishlist/>
        </div>
    );
};

export default ElementsButtonsQuantity;
import React from 'react';
import styles from './ElementsCart.module.css';
import ElementsButtonsQuantity from "../elements--buttons-quantity/ElementsButtonsQuantity";
import ElementsCartButtonAddcart from "../elements-cart-button-addcart/ElementsCartButtonAddcart";

const ElementsCart = () => {
    return (
        <div className={styles.base}>
            <ElementsButtonsQuantity/>
            <ElementsCartButtonAddcart/>
        </div>
    );
};

export default ElementsCart;
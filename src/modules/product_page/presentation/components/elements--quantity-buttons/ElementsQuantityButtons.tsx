import React from 'react';
import styles from './ElementsQuantityButtons.module.css';
import ElementsQuantityButtonsQuantity from "../elements--quantity-buttons-quantity/ElementsQuantityButtonsQuantity";

const ElementsQuantityButtons = () => {
    return (
        <div className={styles.base}>
            <ElementsQuantityButtonsQuantity quantity={1}/>
        </div>
    );
};

export default ElementsQuantityButtons;
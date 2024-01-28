import React from 'react';
import styles from './ElementsQuantityButtonsQuantity.module.css';
import minus from './images/Minus.svg';
import add from './images/Add.svg';

interface Props {
    quantity: number
}

const ElementsQuantityButtonsQuantity = ({quantity}: Props) => {
    return (
        <div className={styles.base}>
            <img className={styles.img} src={minus} alt={minus}/>
            <div className={styles.quantity}>{quantity}</div>
            <img className={styles.img} src={add} alt={add}/>
        </div>
    );
};

export default ElementsQuantityButtonsQuantity;
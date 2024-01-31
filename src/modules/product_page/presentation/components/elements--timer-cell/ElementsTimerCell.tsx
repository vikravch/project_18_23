import React from 'react';
import styles from './ElementsTimerCell.module.css';

interface Props {
    number: number;
}
const ElementsTimerCell = ({number}: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.text}>{String(number).padStart(2, '0')}</div>
        </div>
    );
};

export default ElementsTimerCell;
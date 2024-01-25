import React from 'react';
import styles from './ElementsTimerBlock.module.css';
import ElementsTimerCell from "../elements--timer-cell/ElementsTimerCell";

interface Props {
    number: number;
    caption:string;
}

const ElementsTimerBlock = ({number, caption}: Props) => {
    return (
        <div className={styles.base}>
            <ElementsTimerCell number={number}/>
            <div className={styles.text}>{caption}</div>
        </div>
    );
};

export default ElementsTimerBlock;
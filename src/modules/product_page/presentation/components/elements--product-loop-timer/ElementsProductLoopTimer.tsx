import React from 'react';
import styles from './ElementsProductLoopTimer.module.css';
import ElementsTimer from "../elements--timer/ElementsTimer";

const ElementsProductLoopTimer = () => {
    return (
        <div className={styles.base}>
            <ElementsTimer/>
        </div>
    );
};

export default ElementsProductLoopTimer;
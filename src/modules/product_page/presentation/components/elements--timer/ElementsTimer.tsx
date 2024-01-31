import React from 'react';
import styles from './ElementsTimer.module.css';
import ElementsTimerBlock from "../elements--timer-block/ElementsTimerBlock";

const ElementsTimer = () => {
    return (
        <div className={styles.base}>
            <div className={styles.offer}>Offer expires in:</div>
            <div className={styles.card}>
                <ElementsTimerBlock number={2} caption={'Days'}/>
                <ElementsTimerBlock number={12} caption={'Hours'}/>
                <ElementsTimerBlock number={45} caption={'Minutes'}/>
                <ElementsTimerBlock number={5} caption={'Seconds'}/>
            </div>
        </div>
    );
};

export default ElementsTimer;
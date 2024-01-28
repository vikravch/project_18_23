import React from 'react';
import styles from './ElementsFrame10Rating.module.css';
import ElementsFrame10RatingStar from "../elements--frame10-rating-star/Elements--Frame10RatingStar";

const ElementsFrame10Rating = () => {
    return (
        <div className={styles.base}>
            <ElementsFrame10RatingStar/>
            <ElementsFrame10RatingStar/>
            <ElementsFrame10RatingStar/>
            <ElementsFrame10RatingStar/>
            <ElementsFrame10RatingStar/>
        </div>
    );
};

export default ElementsFrame10Rating;
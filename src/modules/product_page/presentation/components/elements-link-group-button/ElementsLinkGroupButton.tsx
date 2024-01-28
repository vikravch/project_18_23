import React from 'react';
import styles from './ElementsLinkGroupButton.module.css';
import image from './images/ChevronRight.svg'

interface Props{
    path: string;
}
const ElementsLinkGroupButton = ({path}: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.text}>{path}</div>
            <img className={styles.img} src={image} alt={image}/>
        </div>
    );
};

export default ElementsLinkGroupButton;
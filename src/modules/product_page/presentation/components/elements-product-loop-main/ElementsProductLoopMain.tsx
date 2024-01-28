import React from 'react';
import styles from './ElementsProductLoopMain.module.css';
import ElementLinkGroup from "../elements-link-group/ElementLinkGroup";
import ElementsProductLoop from "../elements-product-loop/ElementsProductLoop";

const ElementsProductLoopMain = () => {
    return (
        <div className={styles.base}>
            <ElementLinkGroup/>
            <ElementsProductLoop/>
        </div>
    );
};

export default ElementsProductLoopMain;
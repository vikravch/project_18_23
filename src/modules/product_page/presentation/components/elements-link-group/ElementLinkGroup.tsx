import React from 'react';
import styles from './ElementLinkGroup.module.css';
import ElementsLinkGroupButton from "../elements-link-group-button/ElementsLinkGroupButton";

const ElementLinkGroup = () => {
    return (
        <div className={styles.base}>
            <ElementsLinkGroupButton path={'Home'}/>
            <ElementsLinkGroupButton path={'Shop'}/>
            <ElementsLinkGroupButton path={'Living room'}/>
            <ElementsLinkGroupButton path={'Product'}/>
        </div>
    );
};

export default ElementLinkGroup;
import React from 'react';
import styles from "./ShopPageToolBar.module.css";
import DropDownCategories from "./DropDownCategories";
import DropDownPrice from "./DropDownPrice";
import ToolBarElements from "./ToolBarElements";

const ShopPageToolBar = () => {
    return (
        <div className={styles.toolBar}>
            <div className={styles.dropdown_wrapper}>
                <DropDownCategories/>
                <DropDownPrice/>
            </div>
            <ToolBarElements/>
        </div>
    );
};

export default ShopPageToolBar;
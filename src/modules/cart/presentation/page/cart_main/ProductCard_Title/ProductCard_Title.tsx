import React from 'react';
import styles from "../cart_productCard/product_card.module.css";

function ProductCardTitle() {
    return (
        <div className={styles.cart}>
            <div className={styles.table_header}>
                <p className={styles.table_header_title_p}>Product</p>
                <div className={styles.table_header_desktop}>
                    <p className={styles.table_header_title}>Quantity</p>
                    <p className={styles.table_header_title}>Price</p>
                    <p className={styles.table_header_title}>Subtotal</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCardTitle;
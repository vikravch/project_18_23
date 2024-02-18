import React from 'react';
import styles from "./complete_information.module.css";
import {products} from "../../../../data/fake/products-config";
import {ProductType} from "../../../../data/types";

function CompleteInformation() {
    return (
        <div className={styles.info_box}>
            <div className={styles.title}>
                <p className={styles.thanks}> Thank you!🎉 </p>
                <p className={styles.order_received}> Your order has been received</p></div>
            <div className={styles.orders}>
                {products.map((p: ProductType, index: number) =>
                <div className={styles.order}>
                    <div className={styles.order_dot}>
                        <img className={styles.img} src={p.image}/>
                        <div className={styles.dot_quantity}>
                            <p className={styles.product_count}>{p.count}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className={styles.information}>
                <div className={styles.info_row}>
                    <p className={styles.order_id}>Order Code:</p>
                    <p className={styles.order_data}>26262656</p>
                </div>
                <div className={styles.info_row}>
                    <p className={styles.order_id}>Date:</p>
                    <p className={styles.order_data}>26262656</p>
                </div>
                <div className={styles.info_row}>
                    <p className={styles.order_id}>Total:</p>
                    <p className={styles.order_data}>26262656</p>
                </div>
                <div className={styles.info_row}>
                    <p className={styles.order_id}>Payment method:</p>
                    <p className={styles.order_data}>26262656</p>
                </div>
            </div>
            <div className={styles.btn}>
                <button className={styles.button}>Purchase history</button>
            </div>
        </div>
    );
}

export default CompleteInformation;
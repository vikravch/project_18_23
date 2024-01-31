import React from 'react';
import styles from "../complete_information/complete_information.module.css";
import order1 from "../img/1.png";
import order2 from "../img/2.jpg";
import order3 from "../img/3.jpg";

function CompleteInformation() {
    return (
        <div className={styles.info_box}>
            <div className={styles.title}>
                <p className={styles.thanks}> Thank you!🎉 </p>
                <p className={styles.order_received}> Your order has been received</p></div>
            <div className={styles.orders}>
                <div className={styles.order}>
                    <div className={styles.order_dot}>
                        <img className={styles.img} src={order1} alt={'1'}/>
                        <div className={styles.dot_quantity}>
                            <p className={styles.product_count}>2</p>
                        </div>
                    </div>
                </div>
                <div className={styles.order}>
                    <div className={styles.order_dot}>
                        <img className={styles.img} src={order2} alt={'2'}/>
                        <div className={styles.dot_quantity}>
                            <p className={styles.product_count}>1</p>
                        </div>
                    </div>
                </div>
                <div className={styles.order}>
                    <div className={styles.order_dot}>
                        <img className={styles.img} src={order3} alt={'3'}/>
                        <div className={styles.dot_quantity}>
                            <p className={styles.product_count}>3</p>
                        </div>
                    </div>
                </div>
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
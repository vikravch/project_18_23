import React from 'react';
import styles from './complete.module.css';
import order1 from '../img/1.png';
import order2 from '../img/2.jpg';
import order3 from '../img/3.jpg';
import circle_3 from '../img/circle_3.png';
import circle_green from '../img/circle_green.png';

function CompletePage() {
    return (
        <div className={styles.main}>

            <p className={styles.back}>&#60; back to home</p>
            <p className={styles.complete}>Complete!</p>

            <div className={styles.steps}>

                <div className={styles.step_green}>
                    <img className={styles.img_circle} src={circle_green}/>
                    <p className={styles.step_name}>Shopping cart</p><br/>
                </div>
                <div className={styles.step_green}>
                    <img className={styles.img_circle} src={circle_green}/>
                    <p className={styles.step_name}>Checkout details</p><br/>
                </div>

                <div className={styles.step_active}>
                    <img className={styles.img_circle} src={circle_3}/>
                    <p className={styles.step_name}>Order complete</p><br/>
                </div>

            </div>

            <div className={styles.info_box}>
                <p className={styles.thanks}> Thank you!🎉 </p>
                <p className={styles.order_received}> Your order has been received</p>

                <div className={styles.orders}>
                    <div className={styles.order}>
                        <img className={styles.img} src={order1}/>
                    </div>
                    <div className={styles.order}>
                        <img className={styles.img} src={order2}/>
                    </div>
                    <div className={styles.order}>
                        <img className={styles.img} src={order3}/>
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

                    <div className={styles.btn}>
                        <button className={styles.button}>Purchase history</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CompletePage;
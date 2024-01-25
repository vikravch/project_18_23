import React from 'react';
import styles from './cart.module.css';
import circle_1 from "../img/circle_1.png";
import circle_grey_2 from "../img/circle_grey_2.png";
import circle_grey_3 from "../img/circle_grey_3.png";
import product1 from '../img/1.png';
import product2 from '../img/2.jpg';
import product3 from '../img/3.jpg';
import remove from '../img/remove.png';
import minus from '../img/minus.png';
import plus from '../img/plus.png';


function CartPage() {
    return (
        <div className={styles.main}>

            {/*Header*/}

            <p className={styles.back}>&#60; back to home</p>
            <p className={styles.page_header}>Cart</p>

            <div className={styles.steps}>

                <div className={styles.step_active}>
                    <img className={styles.img_circle} src={circle_1}/>
                    <p className={styles.step_name}>Shopping cart</p><br/>
                </div>
                <div className={styles.step_grey}>
                    <img className={styles.img_circle} src={circle_grey_2}/>
                    <p className={styles.step_name}>Checkout details</p><br/>
                </div>

                <div className={styles.step_grey}>
                    <img className={styles.img_circle} src={circle_grey_3}/>
                    <p className={styles.step_name}>Order complete</p><br/>
                </div>

            </div>

            {/*Information Block*/}

            {/*Information Block_Header*/}

            <div className={styles.cart}>
                <div className={styles.table_header}>
                    <div className={styles.table_header_mobile}>
                        <p>Product</p>
                    </div>
                    <div className={styles.table_header_desktop}>
                        <p>Product</p>
                        <div className={styles.table_header_desktop_titles}>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Subtotal</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Information Block_Table*/}

            <div className={styles.cart_products}>
                <div className={styles.cart_item}>
                    <div className={styles.product_image}>
                        <img className={styles.img} src={product1}/>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_info_left}>
                            <p className={styles.product_title}>Red Table</p>
                            <p className={styles.product_color}>Color: red</p>
                            <div className={styles.quantity}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                        </div>
                        <div className={styles.price_remove}>
                            <p className={styles.price}>$15.14</p>
                            <img className={styles.button_remove} src={remove}/>
                        </div>
                    </div>
                </div>

                <div className={styles.cart_item}>
                    <div className={styles.product_image}>
                        <img className={styles.img} src={product2}/>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_info_left}>
                            <p className={styles.product_title}>Red Chair</p>
                            <p className={styles.product_color}>Color: red</p>
                            <div className={styles.quantity}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                        </div>

                        <div className={styles.price_remove}>
                            <p className={styles.price}>$15.14</p>
                            <img className={styles.button_remove} src={remove}/>
                        </div>
                    </div>
                </div>
                <div className={styles.cart_item}>
                    <div className={styles.product_image}>
                        <img className={styles.img} src={product3}/>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_info_left}>
                            <p className={styles.product_title}>Red Table</p>
                            <p className={styles.product_color}>Color: red</p>
                            <div className={styles.quantity}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                        </div>
                        <div className={styles.price_remove}>
                            <p className={styles.price}>$15.14</p>
                            <img className={styles.button_remove} src={remove}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
        ;
}

export default CartPage;


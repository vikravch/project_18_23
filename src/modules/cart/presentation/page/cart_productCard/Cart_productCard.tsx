import React from 'react';
import styles from "../cart_productCard/product_card.module.css";
import product1 from "../img/1.png";
import minus from "../img/minus.png";
import plus from "../img/plus.png";
import remove from "../img/remove.png";
import product2 from "../img/2.jpg";
import product3 from "../img/3.jpg";

function CartProductCard() {
    return (
        <div className={styles.main}>
            <div className={styles.cart}>
                <div className={styles.table_header}>
                    <p className={styles.table_header_title_p}>Product</p>
                    <div className={styles.table_header_desktop}>
                        <p className={styles.table_header_title}>Quantity</p>
                        <p className={styles.table_header_title}>Price</p>
                        <p className={styles.table_header_title}>Subtotal</p>
                    </div>
                    {/*</div>*/}
                </div>
            </div>

            {/*Information Block_Table*/}

            <div className={styles.cart_products}>
                <div className={styles.cart_item}>
                    <div className={styles.product_image}>
                        <img className={styles.img} src={product1}/>
                        <div className={styles.product_info}>
                            <p className={styles.product_title}>Red Table</p>
                            <p className={styles.product_color}>Color: red</p>
                            <div className={styles.quantity}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                            <div className={styles.remove_desk}>
                                <img className={styles.button_remove_desk} src={remove}/>
                                <p className={styles.remove_title_desk}>Remove</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.price_remove}>
                        <div className={styles.quantity_desk}>
                            <div className={styles.quantity_desk_btn}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                        </div>
                        <p className={styles.price}>$15.14</p>
                        <p className={styles.subtotal_desk}>$456</p>
                        <img className={styles.button_remove} src={remove}/>
                    </div>
                </div>


                <div className={styles.cart_item}>
                    <div className={styles.product_image}>
                        <img className={styles.img} src={product2}/>
                        <div className={styles.product_info}>
                            <p className={styles.product_title}>Red Table</p>
                            <p className={styles.product_color}>Color: red</p>
                            <div className={styles.quantity}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                            <div className={styles.remove_desk}>
                                <img className={styles.button_remove_desk} src={remove}/>
                                <p className={styles.remove_title_desk}>Remove</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.price_remove}>
                        <div className={styles.quantity_desk}>
                            <div className={styles.quantity_desk_btn}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                        </div>
                        <p className={styles.price}>$15.14</p>
                        <p className={styles.subtotal_desk}>$456</p>
                        <img className={styles.button_remove} src={remove}/>
                    </div>
                </div>

                <div className={styles.cart_item}>
                    <div className={styles.product_image}>
                        <img className={styles.img} src={product3}/>
                        <div className={styles.product_info}>
                            <p className={styles.product_title}>Red Table</p>
                            <p className={styles.product_color}>Color: red</p>
                            <div className={styles.quantity}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                            <div className={styles.remove_desk}>
                                <img className={styles.button_remove_desk} src={remove}/>
                                <p className={styles.remove_title_desk}>Remove</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.price_remove}>
                        <div className={styles.quantity_desk}>
                            <div className={styles.quantity_desk_btn}>
                                <img className={styles.button_quantity} src={minus}/>
                                <p className={styles.product_count}>2</p>
                                <img className={styles.button_quantity} src={plus}/>
                            </div>
                        </div>
                        <p className={styles.price}>$15.14</p>
                        <p className={styles.subtotal_desk}>$456</p>
                        <img className={styles.button_remove} src={remove}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;
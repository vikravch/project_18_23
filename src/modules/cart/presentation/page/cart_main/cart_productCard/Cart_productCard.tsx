import React from 'react';
import styles from "./product_card.module.css";
import {products} from "../../../../data/fake/products-config";
import {ProductType} from "../../../../data/types";
import minus from "../../img/minus.png";
import plus from "../../img/plus.png";
import remove from "../../img/remove.png";
import ProductCard_Title from "../ProductCard_Title/ProductCard_Title";

const CartProductCard = () => {
    return (
        <div className={styles.main}>
            <ProductCard_Title/>

            <div className={styles.cart_products}>
                {products.map((p: ProductType, index: number) =>
                    <div className={styles.cart_item} key={index}>
                        <div className={styles.product_image} >
                            <img className={styles.img}  src={p.image}/>
                            <div className={styles.product_info}>
                                <p className={styles.product_title}>{p.title}</p>
                                <p className={styles.product_color}>Color: {p.color}</p>
                                <div className={styles.quantity}>
                                    <img className={styles.button_quantity} src={minus} alt={'minus'}/>
                                    <p className={styles.product_count}>2</p>
                                    <img className={styles.button_quantity} src={plus} alt={'plus'}/>
                                </div>
                                <div className={styles.remove_desk}>
                                    <img className={styles.button_remove_desk} src={remove} alt={'remove'}/>
                                    <p className={styles.remove_title_desk}>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.price_remove}>
                            <div className={styles.quantity_desk}>
                                <div className={styles.quantity_desk_btn}>
                                    <img className={styles.button_quantity} src={minus} alt={'minus'}/>
                                    <p className={styles.product_count}>2</p>
                                    <img className={styles.button_quantity} src={plus} alt={'plus'}/>
                                </div>
                            </div>
                            <p className={styles.price}>${p.cost}</p>
                            <p className={styles.subtotal_desk}>$456</p>
                            <img className={styles.button_remove} src={remove} alt={'remove'}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartProductCard;
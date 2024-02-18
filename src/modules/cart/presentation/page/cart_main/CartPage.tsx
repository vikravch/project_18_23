import React from 'react';
import styles from "./cart.module.css";
import CartHeader from "./cart_main_header/CartHeader";
import CartProductCard from "./cart_productCard/Cart_productCard";
import CartCoupon from "./cart_coupon/Cart_coupon";
import CartSummary from "./cart_summary/CartSummary";


function CartPage() {
    return (
        <div className={styles.main}>
            <CartHeader/>
            <div className={styles.info}>
                <div className={styles.cart}>
                    <CartProductCard/>
                    <CartCoupon/>
                </div>
                <CartSummary/>
            </div>
        </div>
    )
        ;
}

export default CartPage;


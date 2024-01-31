import React from 'react';
import ContactInformation from "./ContactInformation/ContactInformation";
import Address from "./Address/Address";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Cart_productCard from "../cart_productCard/Cart_productCard";
import s from '../cart_checkout/cart_checkout.module.css';
import OrderSummary from "./OrderSummary/OrderSummary";

const CartCheckout = () => {
    return (
        <div className={s.cart}>
            <ContactInformation/>
            <Address/>
            <PaymentMethod/>
            <OrderSummary/>
            <button>Place Order</button>
        </div>
    );
};

export default CartCheckout;
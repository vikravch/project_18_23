import React from 'react';
import ContactInformation from "./ContactInformation/ContactInformation";
import Address from "./Address/Address";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import s from '../cart_checkout/cart_checkout.module.css';
import OrderSummary from "./OrderSummary/OrderSummary";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import Header from "./Header/Header";

const CartCheckout = () => {
    return (
        <div className={s.main}>
            <Header/>
            <div className={s.cart}>

                <div className={s.form__contacts}>
                    <ContactInformation/>
                    <Address/>
                    <PaymentMethod/>
                </div>
                <OrderSummary/>
                <PlaceOrder/>
            </div>
        </div>
    );
};

export default CartCheckout;
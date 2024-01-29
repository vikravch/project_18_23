import React from 'react';
import ContactInformation from "./ContactInformation/ContactInformation";
import Address from "./Address/Address";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import OrderSummary from "./OrderSummary/OrderSummary";

const CartCheckout = () => {
    return (
        <div>
            <ContactInformation/>
            <Address/>
            <PaymentMethod/>
            <OrderSummary/>
            <button>Place Order</button>
        </div>
    );
};

export default CartCheckout;
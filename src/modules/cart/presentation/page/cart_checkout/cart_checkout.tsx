import React from 'react';
import ContactInformation from "./ContactInformation/ContactInformation";
import Address from "./Address/Address";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Cart_productCard from "../cart_productCard/Cart_productCard";

const CartCheckout = () => {
    return (
        <div>
            <ContactInformation/>
            <Address/>
            <PaymentMethod/>
            <Cart_productCard/>
            <button>Place Order</button>
        </div>
    );
};

export default CartCheckout;
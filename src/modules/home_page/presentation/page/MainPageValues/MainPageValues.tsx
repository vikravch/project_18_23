import React from 'react';
import style from "../homePage.module.css";
import delivery from "../imgMainPage/fast_delivery.svg";
import money from "../imgMainPage/money.svg";
import lock from "../imgMainPage/lock 01.svg";
import call from "../imgMainPage/call.svg";

const MainPageValues = () => {
    return (
        <div className={style.values}>
            <div className={style.values_card}>
                <img src={delivery} alt='Delivery'/>
                <text>Free Shipping</text>
                <p>Order Above $200</p>
            </div>
            <div className={style.values_card}>
                <img src={money} alt='Delivery'/>
                <text>Money Back</text>
                <p>30 days guarantee</p>
            </div>
            <div className={style.values_card}>
                <img src={lock} alt='Delivery'/>
                <text>Secure Payments</text>
                <p>Secured by Stripe</p>
            </div>
            <div className={style.values_card}>
                <img src={call} alt='Delivery'/>
                <text>24/7 Support</text>
                <p>Phone and Email support</p>
            </div>
        </div>
    );
};

export default MainPageValues;
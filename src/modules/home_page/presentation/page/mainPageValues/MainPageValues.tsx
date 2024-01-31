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
                <div>Free Shipping</div>
                <p>Order Above $200</p>
            </div>
            <div className={style.values_card}>
                <img src={money} alt='Delivery'/>
                <div>Money Back</div>
                <p>30 days guarantee</p>
            </div>
            <div className={style.values_card}>
                <img src={lock} alt='Delivery'/>
                <div>Secure Payments</div>
                <p>Secured by Stripe</p>
            </div>
            <div className={style.values_card}>
                <img src={call} alt='Delivery'/>
                <div>24/7 Support</div>
                <p>Phone and Email support</p>
            </div>
        </div>
    );
};

export default MainPageValues;
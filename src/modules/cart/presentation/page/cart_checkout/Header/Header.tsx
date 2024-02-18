import React from 'react';
import s from "../cart_checkout.module.css";
import circle_1_past from "../../img/circle_green.png";
import circle_2 from "../../img/circle_2.png";
import circle_grey_3 from "../../img/circle_grey_3.png";

function Header() {
    return (
        <div className={s.header__main}>
            <p className={s.back}>&#60; back to home</p>
            <p className={s.page_header}>Check Out</p>
            <div className={s.steps + ' '+ s.step_mobile}>
                <div className={s.step + ' ' + s.step_past}>
                    <img className={s.img_circle} src={circle_1_past} alt={'circle'}/>
                    <p className={s.step_name}>Shopping cart</p><br/>
                </div>
                <div className={s.step + ' ' + s.step_active}>
                    <img className={s.img_circle} src={circle_2} alt={'circle'}/>
                    <p className={s.step_name}>Checkout details</p><br/>

                </div>
                <div className={s.step_mobile_img}>
                    <img className={s.img_circle} src={circle_grey_3} alt={'circle'}/>
                </div>
                <div className={s.step + ' ' + s.step_inactive}>
                    <img className={s.img_circle} src={circle_grey_3} alt={'circle'}/>
                    <p className={s.step_name}>Order complete</p><br/>
                </div>
            </div>
        </div>
    );
}

export default Header;
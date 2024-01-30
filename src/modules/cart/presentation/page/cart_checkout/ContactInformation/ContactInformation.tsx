import React from 'react';
import s from '../cart_checkout.module.css';

const ContactInformation = () => {
    return (
        <form className={s.cartForm}>
            <label className={s.cartForm__textTitle}>
                Contact Information
            </label>
            <div className={s.cartForm__rowForTwo}>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>First Name</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputHalf}
                           type={"text"} name={"firstName"} placeholder={'First Name'}/>
                </div>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>Last Name</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputHalf}
                           type={"text"} name={"lastName"} placeholder={'Last Name'}/>
                </div>
            </div>
            <div className={s.cartForm__item}>
                <label className={s.input__labelText}>Phone Number</label>
                <input className={s.cartForm__input + ' ' + s.cartForm__inputWhole}
                       type={"text"} name={"PhoneNumber"} placeholder={'Phone number'}/>
            </div>
            <div className={s.cartForm__item}>
                <label className={s.input__labelText}>Email address</label>
                <input className={s.cartForm__input + ' ' + s.cartForm__inputWhole}
                       type={"text"} name={"firstName"} placeholder={'Your Email'}/>
            </div>
        </form>
    );
};

export default ContactInformation;
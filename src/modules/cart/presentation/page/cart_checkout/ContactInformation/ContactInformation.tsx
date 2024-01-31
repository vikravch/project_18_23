import React from 'react';
import s from '../cart_checkout.module.css';

const ContactInformation = () => {
    return (
        <form className={s.form}>
            <label className={s.form__textTitle}>
                Contact Information
            </label>
            <div className={s.form__rowForTwoInput}>
                <div className={s.form__containerInput}>
                    <label className={s.form__inputTextLabel}>First Name</label>
                    <input className={s.form__inputContainer + ' ' + s.form__inputHalfContainer}
                           type={"text"} name={"firstName"} placeholder={'First Name'}/>
                </div>
                <div className={s.form__containerInput}>
                    <label className={s.form__inputTextLabel}>Last Name</label>
                    <input className={s.form__inputContainer + ' ' + s.form__inputHalfContainer}
                           type={"text"} name={"lastName"} placeholder={'Last Name'}/>
                </div>
            </div>
            <div className={s.form__containerInput}>
                <label className={s.form__inputTextLabel}>Phone Number</label>
                <input className={s.form__inputContainer + ' ' + s.form__inputWholeContainer}
                       type={"text"} name={"PhoneNumber"} placeholder={'Phone number'}/>
            </div>
            <div className={s.form__containerInput}>
                <label className={s.form__inputTextLabel}>Email address</label>
                <input className={s.form__inputContainer + ' ' + s.form__inputWholeContainer}
                       type={"text"} name={"firstName"} placeholder={'Your Email'}/>
            </div>
        </form>
    );
};

export default ContactInformation;
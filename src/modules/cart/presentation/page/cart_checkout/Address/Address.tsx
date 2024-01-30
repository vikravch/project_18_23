import React from 'react';
import s from '../cart_checkout.module.css'

const Address = () => {
    return (
            <form className={s.cartForm}>
                <label className={s.cartForm__textTitle}>Shipping Address</label>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>Street Address*</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputWhole}
                           type={"text"} name={"address"} placeholder={"Street Address"}/>
                </div>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>Country*</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputWhole}
                           type={"text"} name={"country"} placeholder={"Country"}/>
                </div>
                <div className={s.cartForm__item}>
                    <label className={s.input__labelText}>Town/City</label>
                    <input className={s.cartForm__input + ' ' + s.cartForm__inputWhole}
                           type={"text"} name={"city"} placeholder={"Town/City"}/>
                </div>
                <div className={s.cartForm__rowForTwo}>
                    <div className={s.cartForm__item}>
                        <label className={s.input__labelText}>State</label>
                        <select className={s.cartForm__input + ' ' + s.cartForm__inputHalf}
                               name={"state"}>
                            <option>State</option>
                        </select>
                    </div>
                    <div className={s.cartForm__item}>
                        <label className={s.input__labelText}>Zip Code</label>
                        <input className={s.cartForm__input + ' ' + s.cartForm__inputHalf}
                               type={"text"} name={"zipCode"} placeholder={"Zip Code"}/>
                    </div>
                </div>
                <div className={s.cartForm__rowForCheckBox}>
                    <input type={"checkbox"} name={"isDifferentbillingAddress"}/>
                    <label className={s.cartForm__textForCheckBox}>Use a different billing address (optional)</label>
                </div>
            </form>
    );
};

export default Address;
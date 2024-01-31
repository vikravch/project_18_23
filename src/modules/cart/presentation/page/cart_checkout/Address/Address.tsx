import React from 'react';
import s from '../cart_checkout.module.css'
import {countries} from "../../../../data/countries";

const Address = () => {
    return (
        <form className={s.form}>
            <label className={s.form__textTitle}>Shipping Address</label>
            <div className={s.form__containerInput}>
                <label className={s.form__inputTextLabel}>Street Address*</label>
                <input className={s.form__inputContainer + ' ' + s.form__inputWholeContainer}
                       type={"text"} name={"address"} placeholder={"Street Address"}/>
            </div>
            <div className={s.form__containerInput}>
                <label className={s.form__inputTextLabel}>Country*</label>
                <select className={s.form__inputContainer + ' ' + s.form__inputWholeContainer}
                        name={"country"}>
                    <option value={'0'}>Country</option>
                    {
                        countries.map((c: string, index: number) =>
                            <option value={index}>{c}</option>
                        )
                    }
                </select>
            </div>
            <div className={s.form__containerInput}>
                <label className={s.form__inputTextLabel}>Town/City</label>
                <input className={s.form__inputContainer + ' ' + s.form__inputWholeContainer}
                       type={"text"} name={"city"} placeholder={"Town/City"}/>
            </div>
            <div className={s.form__rowForTwoInput}>
                <div className={s.form__containerInput}>
                    <label className={s.form__inputTextLabel}>State</label>
                    <input className={s.form__inputContainer + ' ' + s.form__inputHalfContainer}
                           type={"text"} name={"state"} placeholder={"State"}/>
                </div>
                <div className={s.form__containerInput}>
                    <label className={s.form__inputTextLabel}>Zip Code</label>
                    <input className={s.form__inputContainer + ' ' + s.form__inputHalfContainer}
                           type={"text"} name={"zipCode"} placeholder={"Zip Code"}/>
                </div>
            </div>
            <div className={s.form__checkBoxContainer}>
                <input type={"checkbox"} name={"isDifferentbillingAddress"}/>
                <label className={s.form__checkBoxContainer_textElement}>Use a different billing address
                    (optional)</label>
            </div>
        </form>
    );
};

export default Address;
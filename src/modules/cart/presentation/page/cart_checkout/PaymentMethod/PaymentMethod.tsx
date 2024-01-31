import React from 'react';
import s from "../cart_checkout.module.css";

const PaymentMethod = () => {
    return (
        <form className={s.form}>
            <label className={s.form__textTitle}>
                Payment method
            </label>
            <div className={s.form__containerCheckBox}>
                <div className={s.form__containerCheckBox_Item}>
                    <div className={s.form__containerCheckBox_Item_Content}>
                        <input type={"radio"} name="paymentMethod" id={"creditCard"}/>
                        <label className={s.form__containerCheckBox_Item_Content_Text}
                               htmlFor="creditCard">Pay by Card Credit</label>
                    </div>
                </div>
                <div className={s.form__containerCheckBox_Item}>
                    <div className={s.form__containerCheckBox_Item_Content}>
                        <input type={"radio"} name="paymentMethod" id={"pauPal"}/>
                        <label className={s.form__containerCheckBox_Item_Content_Text}
                               htmlFor="debitCard">Paypal</label>
                    </div>
                </div>
            </div>
            <div className={s.form__containerInput}>
                <label className={s.form__inputTextLabel}>Card Number</label>
                <input className={s.form__inputContainer + ' ' + s.form__inputWholeContainer}
                       type={"text"} name={"cardNumber"} placeholder={'1234 1234 1234'}/>
            </div>
            <div className={s.form__rowForTwoInput}>
                <div className={s.form__containerInput}>
                    <label className={s.form__inputTextLabel}>Expiration date</label>
                    <input className={s.form__inputContainer + ' ' + s.form__inputHalfContainer}
                           type={"text"} name={"cardDate"} placeholder={'MM/YY'}/>
                </div>
                <div className={s.form__containerInput}>
                    <label className={s.form__inputTextLabel}>CVC</label>
                    <input className={s.form__inputContainer + ' ' + s.form__inputHalfContainer}
                           type={"text"} name={"cvcCode"} placeholder={'CVC code'}/>
                </div>
            </div>
        </form>
    );
};

export default PaymentMethod;
import React from 'react';
import style from "./accountDetailsForm.module.css";


const AccountDetailsForm = () => {
    return (
        <div className={style.details_form}>
            <span className={style.form_name}>Account Details</span>
            <div className={style.input_container}>
                <span className={style.label}>first name *</span>
                <input className={style.detail_input} type={"text"} name={'firstName'} placeholder={'First name'}/>
            </div>
            <div className={style.input_container}>
                <span className={style.label}>last name *</span>
                <input className={style.detail_input} type={"text"} name={'lastName'} placeholder={'Last name'}/>
            </div>
            <div className={style.input_container}>
                <span className={style.label}>display name *</span>
                <input className={style.detail_input} type={"text"} name={'displayName'} placeholder={'Display name'}/>
                <p className={style.description}>This will be how your name will be displayed in the account section and in reviews</p>
            </div>
            <div className={style.input_container}>
                <span className={style.label}>email *</span>
                <input className={style.detail_input} type={"email"} name={'email'} placeholder={'Email'}/>
            </div>
        </div>
    );
};

export default AccountDetailsForm;
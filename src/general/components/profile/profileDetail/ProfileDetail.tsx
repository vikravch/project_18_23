import React from 'react';
import style from './profileDetail.module.css';
const ProfileDetail = () => {
    return (
        <div className={style.wrapper}>
            {/*Account Details form*/}
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

            {/*Password Form*/}

            <div className={style.details_form}>
                <span className={style.form_name}>Password</span>
                <div className={style.input_container}>
                    <p className={style.label}>old password</p>
                    <input className={style.detail_input} type={"password"} name={'oldPassword'} placeholder={'Old password'}/>
                </div>
                <div className={style.input_container}>
                    <p className={style.label}>New password</p>
                    <input className={style.detail_input} type={"password"} name={'newPassword'} placeholder={'New password'}/>
                </div>
                <div className={style.input_container}>
                    <p className={style.label}>repeat new password</p>
                    <input className={style.detail_input} type={"password"} name={'repeatNewPassword'} placeholder={'Repeat new password'}/>
                </div>
                <button className={style.profile_change_password_btn}>Save changes</button>
            </div>


            <div className={style.password_form}>

            </div>


        </div>
    );
};

export default ProfileDetail;
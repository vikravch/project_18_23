import React from 'react';
import style from "./changePasswordForm.module.css";

const ChangePasswordForm = () => {
    return (
        <div>
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
        </div>
    );
};

export default ChangePasswordForm;
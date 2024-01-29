import React from 'react';
import style from './profileDetail.module.css';
import AccountDetailsForm from "./forms/accountDetailsForm/AccountDetailsForm";
import ChangePasswordForm from "./forms/changePasswordForm/ChangePasswordForm";

const ProfileDetail = () => {
    return (
        <div className={style.wrapper}>
            <AccountDetailsForm/>
            <ChangePasswordForm/>
        </div>
    );
};

export default ProfileDetail;



import React from 'react';
import style from './profileAddres.module.css';

const ProfileAddress = () => {
    return (
        <div className={style.wrapper}>
            <span className={style.content_name}>Address</span>

            <div className={style.address_container}>
                <div className={style.address_title}>
                    <span>Billing Address</span>
                    <img className={style.address_edit_btn} src={'./images/profile/edit_button.svg'} alt={'Edit button'}/>
                </div>
                <div className={style.address_data_container}>
                    <p className={style.address_data}>Sofia Havertz</p>
                    <p className={style.address_data}>(+1) 234 567 890</p>
                    <p className={style.address_data}>345 Long Island, NewYork, United States</p>
                </div>
            </div>

            <div className={style.address_container}>
                <div className={style.address_title}>
                    <span>Shipping Address</span>
                    <img className={style.address_edit_btn} src={'./images/profile/edit_button.svg'} alt={'Edit button'}/>
                </div>
                <div className={style.address_data_container}>
                    <p className={style.address_data}>Sofia Havertz</p>
                    <p className={style.address_data}>(+1) 234 567 890</p>
                    <p className={style.address_data}>345 Long Island, NewYork, United States</p>
                </div>

            </div>

        </div>
    );
};

export default ProfileAddress;
import React from 'react';
import style from './profileHeader.module.css'
const ProfileHeader = () => {
    return (
        <div className={style.wrapper}>
            <div>
                <img className={style.back_button} src={'./images/profile/back_button.png'} alt={'Back button'}/>
            </div>
            <div className={style.header_text}>
                <span>My Account</span>
            </div>
        </div>
    );
};

export default ProfileHeader;
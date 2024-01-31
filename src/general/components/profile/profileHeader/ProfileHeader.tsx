import React from 'react';
import style from './profileHeader.module.css'
import {useNavigate} from "react-router";

const ProfileHeader = () => {

    const navigate = useNavigate();

    return (
        <div className={style.wrapper}>
            <div>
                <img className={style.back_button}
                     onClick={() => navigate('/')}
                     src={'/images/profile/back_button.png'} alt={'Back button'}/>
            </div>
            <div className={style.header_text}>
                <span>My Account</span>
            </div>
        </div>
    );
};

export default ProfileHeader;
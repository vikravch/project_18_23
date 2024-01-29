import React from 'react';
import style from './profileNav.module.css';
import {getUserInfo} from "../../../../utils/profile_utils/getData";
import ProfileMobileNav from "./profileMobileNav/ProfileMobileNav";
import ProfileDesktopNav from "./profileDesktopNav/ProfileDesktopNav";
const ProfileNav = () => {

    const userInfo = getUserInfo();

    return (
        <div className={style.wrapper}>
            <div className={style.avatar_container}>
                <img className={style.avatar_foto} src={userInfo.avatar} alt={'Avatar'}/>
                <img className={style.camera_icon} src={'/images/profile/camera_icon.svg'} alt={'Camera icon'}/>
                <span className={style.user_name}>{userInfo.displayName}</span>
            </div>

            <div className={style.mobile_nav}>
                <ProfileMobileNav/>
            </div>

            <div className={style.desktop_nav}>
                <ProfileDesktopNav/>
            </div>

        </div>

    );
};

export default ProfileNav;
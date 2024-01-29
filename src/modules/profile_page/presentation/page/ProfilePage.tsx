import React from 'react';
import style from './profilePage.module.css'
import ProfileHeader from "../../../../general/components/profile/profileHeader/ProfileHeader";
import ProfileNav from "../../../../general/components/profile/profileNav/ProfileNav";
import ProfileDetail from "../../../../general/components/profile/profileDetail/ProfileDetail";

const ProfilePage = () => {
    return (
        <div className={style.profile_page_wrapper}>
            <ProfileHeader/>
            <ProfileNav/>
            <ProfileDetail/>
        </div>
    );
};

export default ProfilePage;
import React from 'react';
import style from "./profileAddressPage.module.css";
import ProfileHeader from "../../../../general/components/profile/profileHeader/ProfileHeader";
import ProfileNav from "../../../../general/components/profile/profileNav/ProfileNav";
import ProfileAddress from "../../../../general/components/profile/profileAddress/ProfileAddress";


const ProfileAddressPage = () => {
    return (
        <div className={style.profile_page_wrapper}>
            <ProfileHeader/>
            <ProfileNav/>
            <ProfileAddress/>
        </div>
    );
};

export default ProfileAddressPage;
import React from 'react';
import style from "./profileOrderHistoryPage.module.css";
import ProfileHeader from "../../../../general/components/profile/profileHeader/ProfileHeader";
import ProfileNav from "../../../../general/components/profile/profileNav/ProfileNav";
import ProfileOrdersHistory from "../../../../general/components/profile/profileOrdersHistory/ProfileOrdersHistory";

const ProfileOrderHistoryPage = () => {
    return (
        <div className={style.profile_page_wrapper}>
            <ProfileHeader/>
            <ProfileNav/>
            <ProfileOrdersHistory/>
        </div>
    );
};

export default ProfileOrderHistoryPage;
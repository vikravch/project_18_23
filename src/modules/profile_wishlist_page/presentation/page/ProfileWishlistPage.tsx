import React from 'react';
import style from "./ProfileWishlistPage.module.css";
import ProfileHeader from "../../../../general/components/profile/profileHeader/ProfileHeader";
import ProfileNav from "../../../../general/components/profile/profileNav/ProfileNav";
import ProfileWishlist from "../../../../general/components/profile/profileWishlist/profileWishlist";
const ProfileOrderHistoryPage = () => {
    return (
        <div className={style.profile_page_wrapper}>
            <ProfileHeader/>
            <ProfileNav/>
            <ProfileWishlist/>
        </div>
    );
};

export default ProfileOrderHistoryPage;
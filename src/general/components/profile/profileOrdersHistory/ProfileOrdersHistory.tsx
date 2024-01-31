import React from 'react';
import style from "./profileOrdersHistory.module.css";
import ProfileOrdersHistoryDesktop from "./profileOrdersHistoryDesktop/ProfileOrdersHistoryDesktop";
import ProfileOrdersHistoryMobile from "./profileOrdersHistoryMobile/ProfileOrdersHistoryMobile";

const ProfileOrdersHistory = () => {

      return (
        <div className={style.wrapper}>
            <div className={style.orders_wrapper_desktop}>
                <ProfileOrdersHistoryDesktop/>
            </div>
            <div className={style.orders_wrapper_mobile}>
                <ProfileOrdersHistoryMobile/>
            </div>
        </div>
    );
};

export default ProfileOrdersHistory;


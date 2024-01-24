import React from 'react';
import style from './profileNav.module.css';
const ProfileNav = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.avatar_container}>
                <img className={style.avatar_foto} src={'../images/profile/avatar.svg'} alt={'Avatar'}/>
                <img className={style.camera_icon} src={'../images/profile/camera_icon.svg'} alt={'Camera icon'}/>
                <span className={style.user_name}>Sofia Havertz</span>
            </div>

            <div className={style.mobile_nav}>
                <select className={style.mobile_nav_selector}>
                    <option>Account</option>
                    <option>Address</option>
                    <option>Orders</option>
                    <option>Wishlist</option>
                    <option>Log Out</option>
                </select>
            </div>

            <div className={style.desktop_nav}>
                <div className={style.div}><span className={style.desktop_nav_item}>Account</span></div>
                <div className={style.div}><span className={style.desktop_nav_item}>Address</span></div>
                <div className={style.div}> <span className={style.desktop_nav_item}>Orders</span></div>
                <div className={style.div}><span className={style.desktop_nav_item}>WishList</span></div>
                <div className={style.div}><span className={style.desktop_nav_item}>Log Out</span></div>
            </div>

        </div>

    );
};

export default ProfileNav;
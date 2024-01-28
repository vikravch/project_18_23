import React from 'react';
import style from './profileNav.module.css';
import {useLocation, useNavigate} from "react-router";
const ProfileNav = () => {
    const navigation = useNavigate();
    const location= useLocation().pathname;
    console.log(location);
    const pathArr = ['/profile', '/profile/address', '/profile/orders'];

    return (
        <div className={style.wrapper}>
            <div className={style.avatar_container}>
                <img className={style.avatar_foto} src={'/images/profile/avatar.svg'} alt={'Avatar'}/>
                <img className={style.camera_icon} src={'/images/profile/camera_icon.svg'} alt={'Camera icon'}/>
                <span className={style.user_name}>Sofia Havertz</span>
            </div>

            <div className={style.mobile_nav}>
                <select className={style.mobile_nav_selector} onChange={(event)=> {navigation(event.target.value);}}>
                    <option selected={location===pathArr[0]} value={pathArr[0]}>Account</option>
                    <option selected={location===pathArr[1]} value={pathArr[1]}>Address</option>
                    <option selected={location===pathArr[2]} value={pathArr[2]}>Orders</option>
                    <option>Wishlist</option>
                    <option>Log Out</option>
                </select>
            </div>

            <div className={style.desktop_nav}>
                <div className={style.div}>
                    <span className={location===pathArr[0]?style.desktop_nav_item_active:style.desktop_nav_item} onClick={()=>navigation(pathArr[0])}>Account</span>
                </div>
                <div className={style.div}>
                    <span className={location===pathArr[1]?style.desktop_nav_item_active:style.desktop_nav_item} onClick={()=>navigation(pathArr[1])}>Address</span>
                </div>
                <div className={style.div}>
                    <span className={location===pathArr[2]?style.desktop_nav_item_active:style.desktop_nav_item} onClick={()=>navigation(pathArr[2])}>Orders</span>
                </div>
                <div className={style.div}>
                    <span className={style.desktop_nav_item}>WishList</span>
                </div>
                <div className={style.div}>
                    <span className={style.desktop_nav_item}>Log Out</span>
                </div>
            </div>

        </div>

    );
};

export default ProfileNav;
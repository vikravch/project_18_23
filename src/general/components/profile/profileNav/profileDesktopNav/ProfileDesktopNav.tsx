import React from 'react';
import style from "./profileDesktopNav.module.css";
import {useLocation, useNavigate} from "react-router";
import {profileNavItems, ProfileNavItemsType} from "../../../../../utils/profile_utils/constants";

const ProfileDesktopNav = () => {
    const navigation = useNavigate();
    const location= useLocation().pathname;

    return (
        <>
            {Object.keys(profileNavItems).map((key:string,index:number)=>
                <div key={index} className={style.profile_desktop_nav_item_container}>
                    <span
                        className={location===profileNavItems[key as keyof ProfileNavItemsType]?style.desktop_nav_item_active:style.desktop_nav_item}
                        onClick={()=>navigation(profileNavItems[key as keyof ProfileNavItemsType])}>{key}</span>
                </div>
            )}
        </>
    );
};

export default ProfileDesktopNav;



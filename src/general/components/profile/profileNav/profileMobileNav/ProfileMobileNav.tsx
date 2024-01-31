import React from 'react';
import style from "./profileMobileNav.module.css";
import {useLocation, useNavigate} from "react-router";
import {profileNavItems, ProfileNavItemsType} from "../../../../../utils/profile_utils/constants";

const ProfileMobileNav = () => {
    const navigation = useNavigate();
    const location= useLocation().pathname;

    return (
        <>
            <select className={style.mobile_nav_selector} onChange={(event)=> {navigation(event.target.value);}}>
                {Object.keys(profileNavItems).map((key:string,index:number)=>
                    <option
                        key={index}
                        selected={location===profileNavItems[key as keyof ProfileNavItemsType]}
                        value={profileNavItems[key as keyof ProfileNavItemsType]}>{key}
                    </option>
                    )}
                </select>
        </>
    );
};

export default ProfileMobileNav;
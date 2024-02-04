import React from 'react';
import style from './navigationRow.module.css';
import frame from './imgNav/frame.svg'
import menu from './imgNav/menu-line-horizontal.svg'
import SearchIcon from "./icons_for_nav/SearchIcon";
import ProfileIcon from "./icons_for_nav/ProfileIcon";
import CartIcon from "./icons_for_nav/CartIcon";

function NavigationRow() {
    return (
        <div className={style.navWrapper}>
            <div className={style.header_row}>
                <div className={style.header_logo}>
                    <img src={menu} alt='Menu'/>
                    <a href='/'>
                        3legant
                        <span>
                            .
                        </span>
                    </a>
                </div>
                <nav className={style.header_nav}>
                    <ul>
                    <li><a href='/'>Home</a></li>
                        <li><a href='/shop'>Shop</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li><a href='/contactUs'>Contact Us</a></li>
                    </ul>
                </nav>
                <div className={style.header_icons}>
                    <span className={style.icons_left}>
                        <a href='/search'><SearchIcon/></a>
                        <a href='/profile'><ProfileIcon/></a>
                    </span>
                    <span className={style.icons_right}>
                        <a href='/cart'><CartIcon/></a>
                        <img src={frame} alt='Frame_icon'/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NavigationRow;

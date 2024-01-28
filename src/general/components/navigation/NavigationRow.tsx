import React from 'react';
import style from './navigationRow.module.css';
import search from './imgNav/search.svg';
import user from './imgNav/user-circle.svg';
import shoppingBag from './imgNav/shoppingBag.svg'
import frame from './imgNav/frame.svg'

function NavigationRow() {
    return (

        <div className={style.navWrapper}>
            <div className={style.header_row}>
                <div className={style.header_logo}>3legant
                    <span>.</span></div>
                <nav className={style.header_nav}>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Shop</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </nav>
                <div className={style.header_icons}>
                    <img src={search} alt='Search_icon'/>
                    <img src={user} alt='User_icon'/>
                    <img src={shoppingBag} alt={'Shopping_bag_icon'}/>
                    <img src={frame} alt='Frame_icon'/>
                </div>
            </div>
        </div>
    );
}

export default NavigationRow;

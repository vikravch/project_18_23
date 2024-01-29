import React from 'react';
import styles from './Footer.module.css';
import InstagramIcon from "./icons_for_social_media/InstagramIcon";
import FacebookIcon from "./icons_for_social_media/FacebookIcon";
import YouTubeIcon from "./icons_for_social_media/YouTubeIcon";

const Footer = () => {
    return (
        <div className={styles.contacts_wrapper}>
            <div className={styles.contacts}>
                <div className={styles.icon_and_navigation}>
                    <div className={styles.contacts_top}>
                            <h2 className={styles.contacts_icon_title}>3legant<span>.</span></h2>
                        <div className={styles.rectangle}></div>
                        <h3 className={styles.contacts_subtitle}>Gift & Decoration Store</h3>
                    </div>
                    <ul className={styles.contacts_navigation}>
                        <li>
                            Home
                        </li>
                        <li>
                            Shop
                        </li>
                        <li>
                            Product
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>
                <div className={styles.contacts_bottom}>
                    <div className={styles.contacts_icons}>
                        <InstagramIcon />
                        <FacebookIcon />
                        <YouTubeIcon />
                    </div>
                    <div className={styles.policy_copyright}>
                        <div className={styles.policy}>
                            <p>Privacy policy</p>
                            <p>Terms of Use</p>
                        </div>
                        <p className={styles.copyright}>Copyright © 2023 3legant. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

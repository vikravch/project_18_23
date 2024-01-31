import React from 'react';
import styles from "./NewsletterSubscribe.module.css"
import Icon_email from "./icon/Icon_email";

const NewsletterSubscribe = () => {
    return (
        <div className={styles.newsletter_bar_wrapper}>
            <div className={styles.join_our_newsletter}>
                <h2 className={styles.join_our_newsletter_text}>Join Our Newsletter</h2>
                <h3 className={styles.sign_up_text}>Sign up for details, new products and promotions</h3>
                <div className={styles.email_newsletter_submission}>
                    <Icon_email/>
                    <input className={styles.newsletter_email_input} type="email" placeholder={'Email address'}/>
                    <button className={styles.newsletter_signup_btn}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSubscribe;
import React from 'react';
import styles from './account.module.css';

function AccountPage ()  {
    return (
        <div className={styles.profile}>
            <nav className={styles.navmenu}>
                <ul>
                    <li>Account</li>
                    <li>Address</li>
                    <li>Orders</li>
                    <li>Wishlist</li>
                    <li>Logout</li>
                </ul>
            </nav>
            <div className={styles.account_details}>
                <h2>Account details</h2>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstname" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastname" />
                    </label>
                    <label>
                        Display Name:
                        <input type="text" name="displayname" />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email" />
                    </label>
                    <h2>Password</h2>
                    <label>
                        Old Password:
                        <input type="password" name="oldpassword" />
                    </label>
                    <label>
                        New Password:
                        <input type="password" name="newpassword" />
                    </label>
                    <label>
                        Repeat Password:
                        <input type="password" name="repeatpassword" />
                    </label>
                    <button className={styles.save_change}>Save change</button>
                </form>
            </div>
        </div>
    );
}

export default AccountPage;

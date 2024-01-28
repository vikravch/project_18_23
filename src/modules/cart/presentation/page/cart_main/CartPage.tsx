import React from 'react';
import styles from './cart.module.css';


function CartPage() {
    return (
       <div >
           <div className={styles.back_arrow}> Back</div>

           <h1 className={styles.header_cart}>Cart</h1>



       </div>

    );
}

export default CartPage;


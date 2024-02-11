import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './ShopPage.module.css';
import sofa from '../components/shopPageCard/images/loveseatsofa.png'
import ShopPageHeader from "../components/shopPageHeader/ShopPageHeader";
import ShopPageCard from "../components/shopPageCard/ShopPageCard";
import ShopPageToolBar from "../components/shopPageToolBar/ShopPageToolBar";

function ShopPage() {
    // const shop = useSelector(App => #);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch();
    // },[]);

    return (

        <div class={styles.shop_page_wrapper}>
            <ShopPageHeader/>
            <div className={styles.productsWrapper}>
                <div className={styles.grids}>
                    <ShopPageToolBar/>
                    <div className={styles.tyles_wrapper}>
                        <div className={styles.tyles_list}>
                            <div className={styles.row}>
                                <ShopPageCard/>
                                <ShopPageCard/>
                                <ShopPageCard/>
                                <ShopPageCard/>
                            </div>
                            <div className={styles.row}>
                                <ShopPageCard/>
                                <ShopPageCard/>
                                <ShopPageCard/>
                                <ShopPageCard/>
                            </div>
                            <div className={styles.row}>
                                <ShopPageCard/>
                                <ShopPageCard/>
                                <ShopPageCard/>
                                <ShopPageCard/>
                            </div>
                        </div>
                        <button className={styles.list_button}>
                            <span className={styles.button_text}>Show more</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShopPage;
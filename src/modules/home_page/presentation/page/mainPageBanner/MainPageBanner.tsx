import React from 'react';
import styles from './banner.module.css'
import arr_right_btn from "../imgMainPage/arrow_right_btn.svg";
import b_liv_room from "../imgMainPage/b_livingRoom.jpg";
import b_bed_room from "../imgMainPage/b_bedRoom.jpg";
import kitchen from "../imgMainPage/b_kitchen.jpg";

const MainPageBanner = () => {
    return (

            <div className={styles.banner}>
                <div className={styles.liv_room}>
                    <div className={styles.liv_room_text}>
                        <p>Living Room</p>
                        <div>
                            <button>Shop Now</button>
                            <img src={arr_right_btn} alt='Arrow_right'/>
                        </div>
                    </div>
                    <img src={b_liv_room} alt='Living_room'/>
                </div>
                <div className={styles.small_cards}>
                    <div className={styles.bedroom}>
                        <div className={styles.bedroom_text}>
                            <p>Bedroom</p>
                            <div>
                                <button>Shop Now</button>
                                <img src={arr_right_btn} alt='Arrow_right'/>
                            </div>
                        </div>
                        <img src={b_bed_room} alt='Bedroom'/>
                    </div>
                    <div className={styles.kitchen}>
                        <div className={styles.kitchen_text}>
                            <p>Kitchen</p>
                            <div>
                                <button>Shop Now</button>
                                <img src={arr_right_btn} alt='Arrow_right'/>
                            </div>
                        </div>
                        <img src={kitchen} alt='Kitchen'/>
                    </div>
                </div>
            </div>

    );
};

export default MainPageBanner;
import React from 'react';
import style from "./profileOrdersHistory.module.css";

const ProfileOrdersHistory = () => {
    return (
        <div className={style.wrapper}>

            <div className={style.orders_wrapper_desktop}>
                <span className={style.content_name}>Orders History</span>

                <div className={style.order_container}>
                    <div className={style.order_labels_container}>
                        <span className={style.order_label}>Number ID</span>
                        <span className={style.order_label}>Dates</span>
                        <span className={style.order_label}>Status</span>
                        <span className={style.order_label}>Price</span>
                    </div>
                    <div className={style.order_data_container}>
                        <span className={style.order_data}>##3456_980</span>
                        <span className={style.order_data}>October 11, 2023</span>
                        <span className={style.order_data}>Delivered</span>
                        <span className={style.order_data}>$345.00</span>
                    </div>

                    <div className={style.order_data_container}>
                        <span className={style.order_data}>#3456fvdvd8</span>
                        <span className={style.order_data}>October 17, 2025</span>
                        <span className={style.order_data}>Delivered</span>
                        <span className={style.order_data}>$2222.00</span>
                    </div>

                    <div className={style.order_data_container}>
                        <span className={style.order_data}>#2356_768</span>
                        <span className={style.order_data}>December 17, 2023</span>
                        <span className={style.order_data}>Delivered</span>
                        <span className={style.order_data}>$1.00</span>
                    </div>
                </div>
            </div>




            <div className={style.orders_wrapper_mobile}>
                <span className={style.content_name}>Orders History</span>

                <div className={style.order_container}>
                    <div className={style.order_labels_container}>
                        <span className={style.order_label}>Number ID</span>
                        <span className={style.order_label}>Dates</span>
                        <span className={style.order_label}>Status</span>
                        <span className={style.order_label}>Price</span>
                    </div>
                    <div className={style.order_data_container}>
                        <span className={style.order_data}>##3456_980</span>
                        <span className={style.order_data}>October 11, 2023</span>
                        <span className={style.order_data}>Delivered</span>
                        <span className={style.order_data}>$345.00</span>
                    </div>
                </div>

                <div className={style.order_container}>
                    <div className={style.order_labels_container}>
                        <span className={style.order_label}>Number ID</span>
                        <span className={style.order_label}>Dates</span>
                        <span className={style.order_label}>Status</span>
                        <span className={style.order_label}>Price</span>
                    </div>
                    <div className={style.order_data_container}>
                        <span className={style.order_data}>#3456fvdvd8</span>
                        <span className={style.order_data}>October 17, 2025</span>
                        <span className={style.order_data}>Delivered</span>
                        <span className={style.order_data}>$2222.00</span>
                    </div>
                </div>

                <div className={style.order_container}>
                    <div className={style.order_labels_container}>
                        <span className={style.order_label}>Number ID</span>
                        <span className={style.order_label}>Dates</span>
                        <span className={style.order_label}>Status</span>
                        <span className={style.order_label}>Price</span>
                    </div>
                    <div className={style.order_data_container}>
                        <span className={style.order_data}>#2356_768</span>
                        <span className={style.order_data}>December 17, 2023</span>
                        <span className={style.order_data}>Delivered</span>
                        <span className={style.order_data}>$1.00</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileOrdersHistory;
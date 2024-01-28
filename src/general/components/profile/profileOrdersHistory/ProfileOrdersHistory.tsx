import React from 'react';
import style from "./profileOrdersHistory.module.css";
import {getOrdersHistory} from "../../../../utils/getData";
import {OrdersHistoryType} from "../../../../utils/fake_data";

const ProfileOrdersHistory = () => {
    const data: OrdersHistoryType[] = getOrdersHistory();
      return (
        <div className={style.wrapper}>
            <div className={style.orders_wrapper_desktop}>
                <span className={style.content_name}>Orders History</span>

                <div className={style.order_labels_container}>
                    {Object.keys(data[0]).map((key: string, index: number) =>
                        <span key={index} className={style.order_label}>{key}</span>
                    )}
                </div>
                <div className={style.order_container}>
                    {data.map((item: OrdersHistoryType, index: number) =>
                        <div className={style.order_data_container}>
                            {Object.keys(item).map((key: string, index: number) =>
                                <span key={index}
                                      className={style.order_data}>{item[key as keyof OrdersHistoryType]}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>


            <div className={style.orders_wrapper_mobile}>
                <span className={style.content_name}>Orders History</span>

                {data.map((item: OrdersHistoryType, index: number) =>
                    <div className={style.order_container}>
                        <div className={style.order_labels_container}>
                            {Object.keys(data[0]).map((key: string, index: number) =>
                                <span key={index}
                                      className={style.order_label}>{key}</span>
                            )}
                        </div>
                        <div className={style.order_data_container}>
                            {Object.keys(item).map((key: string, index: number) =>
                                <span key={index}
                                      className={style.order_data}>{item[key as keyof OrdersHistoryType]}</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileOrdersHistory;


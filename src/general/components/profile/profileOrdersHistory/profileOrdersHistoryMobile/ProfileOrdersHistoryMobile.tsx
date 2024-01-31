import React from 'react';
import style from "./profileOrdersHistoryMobile.module.css";
import {OrdersHistoryType} from "../../../../../utils/profile_utils/fake_data";
import {getOrdersHistory} from "../../../../../utils/profile_utils/getData";

const ProfileOrdersHistoryMobile = () => {
    const data: OrdersHistoryType[] = getOrdersHistory();
    return (
        <>
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
        </>
    );
};

export default ProfileOrdersHistoryMobile;
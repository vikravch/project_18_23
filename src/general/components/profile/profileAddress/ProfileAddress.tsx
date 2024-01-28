import React from 'react';
import style from './profileAddres.module.css';
import {AddressType} from "../../../../utils/fake_data";
import {getAddresses} from "../../../../utils/getData";


const ProfileAddress = () => {
    const data = getAddresses();

    return (
        <div className={style.wrapper}>
            <span className={style.content_name}>Address</span>
            {data.map((item: AddressType, index:number) =>
                <div key={index} className={style.address_container}>
                    <div className={style.address_title}>
                        <span>{item.addressTitle}</span>
                        <img className={style.address_edit_btn} src={'/images/profile/edit_button.svg'}
                             alt={'Edit button'}/>
                    </div>
                    <div className={style.address_data_container}>
                        <p className={style.address_data}>{item.name}</p>
                        <p className={style.address_data}>{item.phone}</p>
                        <p className={style.address_data}>{item.address}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileAddress;
import React from 'react';
import s from "../cart_checkout.module.css";
import {products} from "../../../../data/fake/products-config";
import {ProductType} from "../../../../data/types";

const OrderSummary = () => {
    return (
        <form className={s.form}>
            <label className={s.form__textTitle}>
                Order summary
            </label>
            {products.map((p: ProductType, index: number) =>
                <div className={s.productItem} key={index}>
                    <img className={s.productItem__image} src={p.image}/>
                    <div className={s.productItem__summary}>
                        <p className={s.productItem__textTitle}>{p.title}</p>
                        <p className={s.productItem__textColor}>Color: {p.color}</p>
                        <p className={s.productItem__textPrice}>${p.cost}</p>
                    </div>
                </div>
            )}
        </form>
    );
};

export default OrderSummary;
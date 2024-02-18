import React from 'react';
import s from "../cart_checkout.module.css";
import {products} from "../../../../data/fake/products-config";
import {ProductType} from "../../../../data/types";
import minus from "../../img/minus.png";
import plus from "../../img/plus.png";
import remove from "../../img/remove.png";
import Coupon from "../Coupon/Coupon";

const OrderSummary = () => {
    return (
        <form className={s.form + ' ' + s.form__summary_desk}>
            <label className={s.form__textTitle}>
                Order summary
            </label>
            {products.map((p: ProductType, index: number) =>
                <div className={s.productItem} key={index}>
                    <img className={s.productItem__image} src={p.image}/>
                    <div className={s.productItem__summary}>
                        <div className={s.productItem__summary_rowForTwo}>
                            <p className={s.productItem__textTitle}>{p.title}</p>
                            <p className={s.productItem__textPrice}>${p.cost}</p>
                        </div>
                        <div className={s.productItem__summary_rowForTwo}>
                            <p className={s.productItem__textColor}>Color: {p.color}</p>
                            <img className={s.productItem__removeBtn}
                                 src={remove}/>
                        </div>
                        <div className={s.productItem__summary_rowForTwo}>
                            <div className={s.productItem__summary_quantity}>
                                <div className={s.productItem__summary_quantity_content}>
                                    <img className={s.productItem__summary_quantity_content_btn}
                                         src={minus}/>
                                    <p>{p.count}</p>
                                    <img className={s.productItem__summary_quantity_content_btn}
                                         src={plus}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Coupon/>
        </form>

    )
        ;
};

export default OrderSummary;
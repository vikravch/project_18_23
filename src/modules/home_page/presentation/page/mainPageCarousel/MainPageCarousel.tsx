import React from 'react';
import style from "../homePage.module.css";
import arr_right_btn from "../imgMainPage/arrow_right_btn.svg";
import element_img1 from "../imgMainPage/element_img1.jpg";
import star from "../imgMainPage/star_icon.svg";

const MainPageCarousel = () => {
    return (
        <div className={style.product_carousel}>
            <div className={style.carousel_title}>
                <p>New Arrivals</p>
                <div>
                    <button>More Products</button>
                    <img src={arr_right_btn} alt='Arrow_right'/>
                </div>
            </div>

            <div className={style.product_cards}>
                <div className={style.pr_card}>
                    <div className={style.element_card}>
                        <img src={element_img1} alt='Sofa'/>
                        <button>Add to cart</button>
                        <div className={style.badges}>
                            <p className={style.new}>NEW</p>
                            <p className={style.discount}> -15% </p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                            <span>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                            </span>
                        <p>Loveseat Sofa</p>
                        <div className={style.price}>
                            <p>$199.00</p>
                            <p style={{color: '#6C7275'}}>$400.00</p>
                        </div>
                    </div>
                </div>
                <div className={style.pr_card}>
                    <div className={style.element_card}>
                        <img src={element_img1} alt='Sofa'/>
                        <button>Add to cart</button>
                        <div className={style.badges}>
                            <p className={style.new}>NEW</p>
                            <p className={style.discount}> -15% </p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                            <span>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                            </span>
                        <p>Loveseat Sofa</p>
                        <div className={style.price}>
                            <p>$199.00</p>
                            <p style={{color: '#6C7275'}}>$400.00</p>
                        </div>
                    </div>
                </div>
                <div className={style.pr_card}>
                    <div className={style.element_card}>
                        <img src={element_img1} alt='Sofa'/>
                        <button>Add to cart</button>
                        <div className={style.badges}>
                            <p className={style.new}>NEW</p>
                            <p className={style.discount}> -15% </p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                            <span>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                            </span>
                        <p>Loveseat Sofa</p>
                        <div className={style.price}>
                            <p>$199.00</p>
                            <p style={{color: '#6C7275'}}>$400.00</p>
                        </div>
                    </div>
                </div>
                <div className={style.pr_card}>
                    <div className={style.element_card}>
                        <img src={element_img1} alt='Sofa'/>
                        <button>Add to cart</button>
                        <div className={style.badges}>
                            <p className={style.new}>NEW</p>
                            <p className={style.discount}> -15% </p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                            <span>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                            </span>
                        <p>Loveseat Sofa</p>
                        <div className={style.price}>
                            <p>$199.00</p>
                            <p style={{color: '#6C7275'}}>$400.00</p>
                        </div>
                    </div>
                </div>
                <div className={style.pr_card}>
                    <div className={style.element_card}>
                        <img src={element_img1} alt='Sofa'/>
                        <button>Add to cart</button>
                        <div className={style.badges}>
                            <p className={style.new}>NEW</p>
                            <p className={style.discount}> -15% </p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                            <span>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                            </span>
                        <p>Loveseat Sofa</p>
                        <div className={style.price}>
                            <p>$199.00</p>
                            <p style={{color: '#6C7275'}}>$400.00</p>
                        </div>
                    </div>
                </div>
                <div className={style.pr_card}>
                    <div className={style.element_card}>
                        <img src={element_img1} alt='Sofa'/>
                        <button>Add to cart</button>
                        <div className={style.badges}>
                            <p className={style.new}>NEW</p>
                            <p className={style.discount}> -15% </p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                            <span>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                                <img src={star} alt='Star'/>
                            </span>
                        <p>Loveseat Sofa</p>
                        <div className={style.price}>
                            <p>$199.00</p>
                            <p style={{color: '#6C7275'}}>$400.00</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MainPageCarousel;
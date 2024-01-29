import React from 'react';
import style from './homePage.module.css'
import sofa from './imgMainPage/main_sofa.jpg'
import arrow_left from './imgMainPage/arrow-left.svg';
import arrow_right from './imgMainPage/arrow-right.svg';
import b_liv_room from './imgMainPage/b_livingRoom.jpg'
import b_bed_room from './imgMainPage/b_bedRoom.jpg'
import kitchen from './imgMainPage/b_kitchen.jpg'
import arr_right_btn from './imgMainPage/arrow_right_btn.svg'
import element_img1 from './imgMainPage/element_img1.jpg'
import star from './imgMainPage/star_icon.svg'

function HomePage() {
    return (
        <div className={style.main_wrapper}>
            <div className={style.slider_wrapper}>
                <div className={style.slider}>
                    <img src={sofa} alt='Main_img'/>
                    <div className={`${style.arrow}  ${style.left}`}>
                        <img src={arrow_left} alt='Arrow_left'/>
                    </div>
                    <div className={`${style.arrow}  ${style.right}`}>
                        <img src={arrow_right} alt='Arrow_right'/>
                    </div>
                </div>
                <div className={style.slider_header}>
                    <p className={style.slider_text}>Simply Unique<span>/</span> Simply Better<span>.</span></p>
                    <p className={style.slider_disclaimer}>
                        <span className={style.bold}>3legant</span> is a gift & decorations store based in HCMC,
                        Vietnam. Est since 2019.</p>
                </div>

            </div>
            <div className={style.banner}>
                <div className={style.liv_room}>
                    <div className={style.liv_room_text}>
                        <p>Living Room</p>
                        <div>
                            <button>Shop Now</button>
                            <img src={arr_right_btn} alt='Arrow_right'/>
                        </div>
                    </div>
                    <img src={b_liv_room} alt='Living_room'/>
                </div>
                <div className={style.small_cards}>
                    <div className={style.bedroom}>
                        <div className={style.bedroom_text}>
                            <p>Bedroom</p>
                            <div>
                                <button>Shop Now</button>
                                <img src={arr_right_btn} alt='Arrow_right'/>
                            </div>
                        </div>
                        <img src={b_bed_room} alt='Bedroom'/>
                    </div>
                    <div className={style.kitchen}>
                        <div className={style.kitchen_text}>
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
                </div>
            </div>
        </div>
    );
}

export default HomePage;

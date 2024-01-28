import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './ShopPage.module.css';
import sofa from './images/loveseatsofa.png'

function ShopPage() {
    // const shop = useSelector(App => #);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch();
    // },[]);

    return (

        <div class={styles.shop_page_wrapper}>
            <div className={styles.shopPageHeader}>
                <div className={styles.imageHolder}>
                    <div className={styles.textBoxPageHeader}>
                        <div className={styles.linkGroup}>
                            <button className={styles.btn_home}>
                                <span className={styles.linkText1}>Home</span>
                                <div className={styles.icon_chevron_right}>
                                    <icon className={styles.chevron_right}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.58423 3L7.58423 6L4.58423 9" stroke="#605F5F" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </icon>
                                </div>
                            </button>
                            <button className={styles.btnShop}>
                                <div className={styles.linkText3}>Shop</div>
                            </button>
                            <div className={styles.buttonHome2}>
                                <div className={styles.linkText2}>Link</div>
                                <div className={styles.icon_chevron_right}>
                                    <icon className={styles.chevron_right}></icon>
                                </div>
                            </div>
                            <div className={styles.buttonHome2}>
                                <div className={styles.linkText2}>Link</div>
                                <div className={styles.icon_chevron_right}>
                                    <icon className={styles.chevron_right}></icon>
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.textHeader}>Shop Page</h3>
                        <div className={styles.textHeaderLower}>Let’s design the place you always imagined.</div>
                    </div>
                </div>
            </div>
            {/*Далее ---- Products*/}
            <div className={styles.productsWrapper}>
                <div className={styles.grids}>
                    <div className={styles.toolBar}>
                        <div className={styles.dropdown_wrapper}>
                            <div className={styles.dropdown_main}>
                                <p>CATEGORIES</p>
                                <div className={styles.dropdown_inner}>
                                    <div className={styles.dropdown_text}>Living Room</div>
                                    <div className={styles.dropdown_button}>
                                        <div className={styles.dropdown_button_icon}>
                                            <i className={styles.dropdown_button_icon_shape}>
                                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#6C7275"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.dropdown_main}>
                                <p>PRICE</p>
                                <div className={styles.dropdown_inner}>
                                    <div className={styles.dropdown_text}>All Price</div>
                                    <div className={styles.dropdown_button}>
                                        <div className={styles.dropdown_button_icon}>
                                            <i className={styles.dropdown_button_icon_shape}>
                                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#6C7275"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.elements_toolbar}>
                            <button className={styles.elements_main_btn}>
                                <div className={styles.element_content}>
                                    <span className={styles.elements_text}>Sort by</span>
                                    <div className={styles.icon_wrapper}>
                                        <div className={styles.elements_icon_wrapper}></div>
                                    </div>
                                </div>
                            </button>
                            <div className={styles.elements_wrapper}>
                                <button className={styles.grid_wrapper}>
                                    <div className={styles.grid_1}>
                                        <div className={styles.grid_1_vector}></div>
                                    </div>
                                </button>
                                <button className={styles.grid_wrapper}>
                                    <div className={styles.grid_2}>
                                        <div className={styles.grid_2_vector}></div>
                                    </div>
                                </button>
                                <button className={styles.grid_wrapper}>
                                    <div className={styles.grid_3_4}>
                                        <div className={styles.grid_3_4_vector}></div>
                                    </div>
                                </button>
                                <button className={styles.grid_wrapper}>
                                    <div className={styles.grid_3_4}>
                                        <div className={styles.grid_3_4_vector}></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tyles_wrapper}>
                        <div className={styles.tyles_list}>
                            <div className={styles.row}>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.row}>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_card}>
                                    <div className={styles.card_content}>
                                        <div className={styles.content_textprice}>
                                            <div className={styles.starsbar}>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>★</div>
                                                </div>
                                                <div className={styles.staricon}>
                                                    <div className={styles.star}>☆</div>
                                                </div>
                                            </div>
                                            <div className={styles.rating_text}>Loveseat Sofa</div>
                                            <div className={styles.price_wrapper}>
                                                <div className={styles.price1}>$199.00</div>
                                                <div className={styles.price2}>$400.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_element}>
                                        <div className={styles.badges}>
                                            <div className={styles.badge_higher}>
                                                <div className={styles.badge_text}>NEW</div>
                                            </div>
                                            <div className={styles.badge_lower}>
                                                <div className={styles.badge_text}>-50%</div>
                                            </div>
                                        </div>
                                        <div className={styles.addwishlist}>
                                            <div className={styles.iconwishlist}>
                                                <div className={styles.shapewishlist}></div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonhover}>
                                            <div className={styles.buttonhovertext}>Add to cart</div>
                                        </div>
                                        <div className={styles.card_image}>
                                            <img className={styles.card_image} src={sofa}/>
                                        </div>
                                    </div>
                                </div>
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
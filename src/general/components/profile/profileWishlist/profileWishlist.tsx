import React from 'react';
import style from './profileWishlist.module.css'

const ProfileWishlist = () => {
    const products = [
        {img: '/images/profile/img/tray_table.svg', name: 'Tray Table', color: 'Black', price: '$19.19'},
        {img: '/images/profile/img/sofa.svg', name: 'Sofa', color: 'beige', price: '$345'},
        {img: '/images/profile/img/bamboo_basket.svg', name: 'Bamboo basket', color: 'beige', price: '$8.80'},
        {img: '/images/profile/img/pillow.svg', name: 'Pillow', color: 'beige', price: '$8.80'}
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.wishlists_wrapper_desktop}>
                <span className={style.content_name}>Your Wishlist</span>
                <div className={style.wishlist_container}>
                    <div className={style.wishlist_titles_container}>
                        <span className={style.wishlist_tile}>Product</span>
                        <span className={style.wishlist_tile}>Price</span>
                        <span className={style.wishlist_tile}>Action</span>
                    </div>
                    {products.map((product, index) => (
                        <div className={style.wishlist_data_container} key={index}>
                            <img className={style.icon_X_btn} src={'/images/profile/icon/close.svg'} alt={'img'}/>
                            <img className={style.address_edit_btn} src={product.img} alt={'img'}/>
                            <div>
                                <span className={style.wishlist_data} style={{fontWeight: 'bold'}}>{product.name}</span><br/>
                                <span className={style.wishlist_data} style={{color: 'gray'}}>Color: {product.color}</span>
                            </div>
                            <span className={style.wishlist_data}>{product.price}</span>
                            <button className={style.wishlist_button_add}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.wishlists_wrapper_mobile}>
                <span className={style.content_name}>Your Wishlist</span>
                {products.map((product, index) => (
                    <div className={style.wishlist_container} key={index}>
                        <div className={style.container}>
                            <div className={style.wishlist_titles_container}>
                                <img className={style.icon_X_btn} src={'/images/profile/icon/close.svg'} alt={'img'}/>
                                <img className={style.product_img} src={product.img} alt={'img'}/>
                            </div>
                            <div className={style.wishlist_data_container}>
                                <span className={style.wishlist_data} style={{fontWeight: 'bold'}}>{product.name}</span>
                                <span className={style.wishlist_data} style={{color: 'gray'}}>Color: {product.color}</span>
                                <span className={style.wishlist_data}>{product.price}</span>
                            </div>
                        </div>
                        <button className={style.wishlist_button_add}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileWishlist;

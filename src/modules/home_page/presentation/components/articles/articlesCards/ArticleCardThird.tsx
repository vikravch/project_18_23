import React from 'react';
import ShopNowArrow from "../ShopNowArrow";
import art3 from "../images/art3.png";
import stylesForCards from "./ArticleCard.module.css";

const ArticleCardThird = () => {
    return (
        <div className={stylesForCards.article_card_wrapper}>
            <div className={stylesForCards.articles_image}>
                <img src={art3} alt={art3}/>
            </div>
            <div className={stylesForCards.img_info}>
                <h3 className={stylesForCards.article_title}>Decor your bedroom</h3>
                <div className={stylesForCards.more_articles_link}>
                    <button className={stylesForCards.read_more_btn}>Read more</button>
                    <ShopNowArrow/>
                </div>
            </div>
        </div>
    );
};

export default ArticleCardThird;
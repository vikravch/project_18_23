import React from 'react';
import ShopNowArrow from "../ShopNowArrow";
import art2 from "../images/art2.png";
import stylesForCards from "./ArticleCard.module.css";

const ArticleCardSecond = () => {
    return (
        <div className={stylesForCards.article_card_wrapper}>
            <div className={stylesForCards.articles_image}>
                <img src={art2} alt={art2}/>
            </div>
            <div className={stylesForCards.img_info}>
                <h3 className={stylesForCards.article_title}>Kitchen organization</h3>
                <div className={stylesForCards.more_articles_link}>
                    <button className={stylesForCards.read_more_btn}>Read more</button>
                    <ShopNowArrow/>
                </div>
            </div>
        </div>
    );
};

export default ArticleCardSecond;
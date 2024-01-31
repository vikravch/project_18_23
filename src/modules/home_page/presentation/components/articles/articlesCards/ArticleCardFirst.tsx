import React from 'react';
import art1 from "../images/art1.png";
import ShopNowArrow from "../ShopNowArrow";
import stylesForCards from './ArticleCard.module.css';

const ArticleCardFirst = () => {
    return (
        <div className={stylesForCards.article_card_wrapper}>
            <div className={stylesForCards.articles_image}>
                <img src={art1} alt={art1}/>
            </div>
            <div className={stylesForCards.img_info}>
                <h3 className={stylesForCards.article_title}>7 ways to decor your home</h3>
                <div className={stylesForCards.more_articles_link}>
                    <button className={stylesForCards.read_more_btn}>Read more</button>
                    <ShopNowArrow/>
                </div>
            </div>
        </div>
    );
};

export default ArticleCardFirst;
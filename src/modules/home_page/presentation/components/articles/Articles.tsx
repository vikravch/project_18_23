import React from 'react';
import ShopNowArrow from "./ShopNowArrow";
import ArticleCardFirst from "./articlesCards/ArticleCardFirst";
import ArticleCardSecond from "./articlesCards/ArticleCardSecond";
import ArticleCardThird from "./articlesCards/ArticleCardThird";
import stylesForArticles from './Articles.module.css';

const Articles = () => {
    return (
        <div className={stylesForArticles.articles_section}>
            <div className={stylesForArticles.articles_section_inner}>
                <div className={stylesForArticles.title_section}>
                    <h6 className={stylesForArticles.articles_title}>Articles</h6>
                    <div className={stylesForArticles.more_articles_link}>
                        <button className={stylesForArticles.more_btn}>More Articles</button>
                        <ShopNowArrow/>
                    </div>
                </div>
                <div className={stylesForArticles.cards_block}>
                    <ArticleCardFirst/>
                    <ArticleCardSecond/>
                    <ArticleCardThird/>
                </div>
            </div>
        </div>
    );
};
export default Articles;

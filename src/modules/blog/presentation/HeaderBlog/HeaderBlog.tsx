import React from 'react';
import style from "./HeaderBlog.module.css";
import PasteImage from "../../utils/images/PasteImage.png";
import {Link} from "react-router-dom";

const HeaderBlog = () => {
    return (
        <div className={style.pageHeader}>
            <div className={style.homeImage}>
            <img className={style.image} src={PasteImage} alt="img"/>
                <div className={style.textBlog}>
                    <div className={style.bread}><Link className={style.breadHome} to={"/home"}>Home {'>'}</Link><p className={style.breadBlog}> Blog</p></div>
                    <p className={style.ourBlogText}>Our Blog</p>
                    <p className={style.headerText}>Home ideas and design inspiration</p>
                </div>
        </div>
</div>
)
    ;
};

export default HeaderBlog;
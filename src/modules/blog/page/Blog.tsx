import React, {useState} from 'react';
import blogStyle from "./css/Blog.module.css"
import HeaderBlog from "../presentation/HeaderBlog/HeaderBlog";
import ViewSort from "../presentation/SortBlock/ViewSort";
import Article from "../presentation/Article/Article";


const Blog = () => {


    return <div className={blogStyle.blogWrapper}>
        <HeaderBlog/>
        <ViewSort/>
        <Article/>
        </div>

};

export default Blog;
import React from 'react';
import blogStyle from "../../../blog/page/css/Blog.module.css";
import {selectFilter} from "../../redux/FilterSlice";
import {useDispatch, useSelector} from "react-redux";
import Sort from "./Sort";

const View = () => {

    const dispatch = useDispatch();
    const filter = useSelector((state: any) => state.blogFilter?.ourStyle|| 'default');


    return (
        <div className={blogStyle.blocSelectorMain}>
            <div className={blogStyle.filterBlog}>
                <select defaultValue={'all'}
                        onChange={(event) => event.target.value === 'all' ? dispatch(selectFilter("all")) : dispatch(selectFilter("featured"))}>
                    <option value={'all'}>All blog</option>
                    <option value={'featured'}>Featured</option>
                </select>
            </div>
            <div className={blogStyle.blocSelectorMainSort}>
                <div className={blogStyle.blocSelector}>
                    <p onClick={() => dispatch(selectFilter("all"))}
                       className={filter === "all" ? blogStyle.activeBlock : ''}>
                        All blog</p>
                    <p className={filter === "featured" ? blogStyle.activeBlock : ''}
                               onClick={() => dispatch(selectFilter("featured"))}>Featured</p></div>
                <div className={blogStyle.blocSelector}><Sort/>
                    //div with img icon
                </div>
            </div>
        </div>
    );
};

export default View;
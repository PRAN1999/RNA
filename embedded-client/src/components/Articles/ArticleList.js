import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import './ArticleList.css';

export default function ArticleList({ articles }) {
    return (
        <div className={'article-list'}>
            {articles.map(article => 
                <ArticleItem article={article} />
            )}
        </div>
    );
}
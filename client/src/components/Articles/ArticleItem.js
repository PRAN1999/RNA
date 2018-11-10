import React, { Component } from 'react';
import './ArticleItem.css';

export default function ArticleItem({ article }) {
    console.log(article)
    const { title, description, url } = article;
    return (
        <div className={'article-item'}>
            <div>Title: {title}</div>
            <div>Link: <a href={url} target={'_blank'}>{url}</a></div>
            <div>Description: {description}</div>
        </div>
    )
}
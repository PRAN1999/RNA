import React, { Component } from 'react';
import './ArticleItem.css';

export default function ArticleItem({ article }) {
    const { title, description, url } = article;
    return (
        <div className={'article-item'}>
            <div>
                <strong>Title:</strong> {title}
            </div>
            <div className='fit-link'>
                <strong>Link:</strong> <a href={url} target={'_blank'}>{url}</a>
            </div>
            <div>
                <strong>Description:</strong> {description}
            </div>
        </div>
    )
}
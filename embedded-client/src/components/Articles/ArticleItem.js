import React, { Component } from 'react';
import './ArticleItem.css';

export default function ArticleItem({ article }) {
    const { title, description, url } = article;
    return (
        <div className={'article-item'}>
            <div>
                <strong className='bold'>Title:</strong> {title}
            </div>
            <div className='fit-text'>
                <strong className='bold'>Link:</strong> <a href={url} target={'_blank'}>{url}</a>
            </div>
            <div className='fit-text'>
                <strong className='bold'>Description:</strong> {description}
            </div>
        </div>
    )
}
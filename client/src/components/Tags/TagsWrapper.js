import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import './TagsWrapper.css'

export default function TagsWrapper({ tags }) {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    return (
        <div className='tags-wrapper'>
            <strong>Relevant Tags: </strong>
            {tags.map((tag, index) => {
                return (
                    <Badge color={colors[index % colors.length]}
                            style={{ marginRight: '0.25em' }}>
                        {tag}
                    </Badge>
                )
            })}
        </div>
    )
}
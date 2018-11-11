import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import './TagsWrapper.css'

export default function TagsWrapper({ tags }) {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    return (
        <div className='tags-wrapper'>
            {tags.map((tag, index) => {
                return (
                    <Badge color={colors[index % colors.length]}
                            style={{ marginRight: '0.5em', marginTop: '0.5em' }}>
                        {tag}
                    </Badge>
                )
            })}
        </div>
    )
}
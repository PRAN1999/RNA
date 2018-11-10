import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedArticles: []
        };
    }

    render() {
        const renderArticles = this.state.fetchedArticles.length > 0
            ? this.state.fetchedArticles
            : this.props.articles;
        return (
            <ArticleList articles={renderArticles} />
        )
    }
}

function mapStateToProps(state) {
    return {
        fetchedArticles: state.articles
    }
}

export default connect(mapStateToProps, null)(ArticleContainer);
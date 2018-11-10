import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from './ArticleList';

class ArticleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const renderArticles = this.props.fetchedArticles.length > 0
            ? this.props.fetchedArticles
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
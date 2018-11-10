import React, { Component } from 'react';
import logo from '../../rna.png';
import './App.css';
import TagSelect from '../Tags/TagSelect';
import TagsWrapper from '../Tags/TagsWrapper';
import ArticleContainer from '../Articles/ArticleContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { keywords, articles } = this.props.redditData;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RNA</h1>
        </header>
        <br />
        <p className="App-intro">
          <small>
            To get started, just open up any <code>Reddit</code> text post, and we'll find any links we find for you.
          </small>
        </p>
        <div className="App-body">
          <TagsWrapper tags={ keywords }/>
          <TagSelect options={ keywords } />
          <ArticleContainer articles={ articles } />
        </div>
      </div>
    );
  }
}

export default App;

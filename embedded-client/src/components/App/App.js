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
          <img src="https://cdn.brainpop.com/science/cellularlifeandgenetics/rna/screenshot1.png" 
            className="App-logo" alt="logo" />
          <h2 className="App-title">RNA</h2>
        </header>
        <br />
        <p className="App-intro">
          <h1>
            To get started, just open up any <code>Reddit</code> text post, and we'll relevant links for you.
          </h1>
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

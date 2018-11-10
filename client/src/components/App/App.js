import React, { Component } from 'react';
import logo from '../../rna.png';
import './App.css';
import TagSelect from '../TagSelect/TagSelect';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <TagSelect/>
        </div>
      </div>
    );
  }
}

export default App;

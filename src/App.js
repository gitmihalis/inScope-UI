import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import PostsIndex from './components/containers/PostsIndex'


class App extends Component {
  render() {
    return (
      <div className="App">
          <PostsIndex />
      </div>
    );
  }
}

export default App;

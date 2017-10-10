import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import PostsIndex from './components/containers/PostsIndex'

const posts = [
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
  {title: 'Title of my post'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <PostsIndex posts={posts}/>
        </Container>
      </div>
    );
  }
}

export default App;

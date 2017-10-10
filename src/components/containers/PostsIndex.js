import React, { Component } from 'react'
import PostsCarousel from './../presenters/PostsCarousel'


class PostsIndex extends Component {
  constructor(props) {
    super(props)
    this.state ={
      posts: props.posts
    }
  }

  componentDidMount = () => {
    console.log(this, 'is mounted')
  }
  
  render = () => {
    // build lines of posts with matching dateStamps
    console.log(this.state.posts)

    return (
      <PostsCarousel data={this.state.posts} />
    )
  }

}

export default PostsIndex
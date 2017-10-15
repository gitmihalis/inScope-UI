import React, { Component } from 'react'
import PostsCarousel from './../presenters/PostsCarousel'
import { List } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

// get scopeQuery from props
export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scope: this.props.match.params.scope || 'all',
      posts: []
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/api/in/${this.state.scope}`)
    .then(res => {
      const groupedPosts = this.groupPosts(res.data.data)
      this.setState({ posts: groupedPosts})
    });
    
    // immediately resize the browser to fix the autoheight bug
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0)
  }

  groupPosts = (postsData) => { // takes array of post objects sorted by `occurringA` date 
    return _.chain(postsData)
      // group ordered posts into collections of ordered posts based on `occurringAt` date
      .groupBy(post => post.occurringAt)
      // map to object with `occurringAt` date as the key to each post
      .map((value, key) => ({occurringAt: key, posts: value}))
      .value()
  }


  
  render = () => {
    const groupedPosts = this.state.posts
    let stackedPosts = groupedPosts.map( stack => {
      // stack => {occurringAt: "1998-01-01T05:00:00.000Z", posts: Array(1)}occurringAt: "1998-01-01T05:00:00.000Z"posts: [{…}]__proto__: Object
      return <PostsCarousel posts={stack.posts} key={stack.occurringAt} scope={this.state.scope} />
    })

    const postsStyles = {
      display: 'block'
    }
 
    // do for each in posts

    return (
      <List>
        {stackedPosts}
      </List>
    )
  }

}
import React, { Component } from 'react'
import PostsCarousel from './../presenters/PostsCarousel'
import { Container} from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

// get scopeQuery from props
class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/api/in/${this.props.scope}`)
    .then(res => {
      const groupedPosts = this.groupPosts(res.data.data)
      this.setState({ posts: groupedPosts})
    });
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
      return <PostsCarousel cards={stack.posts} key={stack.occurringAt} />
    })
 
    // do for each in posts

    return (
      <div style={{
        marginTop: '3em'
      }}>
        {stackedPosts}
      </div>
    )
  }

}

export default Posts
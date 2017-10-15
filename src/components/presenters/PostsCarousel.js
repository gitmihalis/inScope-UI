import React from 'react'
// TODO downgrade Nuka-Carousel to https://github.com/lyfeyaj/swipe/blob/master/react/swipe.jsx
import Carousel from 'nuka-carousel'
import { Card } from 'semantic-ui-react'
import PostCard from './PostCard'



const PostsCarousel = (props) => {
  console.log('postCarousel', props)
  // build each Post Card inside of carousel
  const posts = props.posts.map( (post, index) => {
    return <PostCard post={post} key={index} scope={props.scope} />
  })


  const carouselStyles = {
    touchAction: 'none',
  }

  return (
    <div>
      <Carousel decorators={[]}
                cellAlign='center'
                dragging={true}
                easing="easeInOutElastic"
                edgeEasing="easeOutCirc"
                slidesToShow={1}
                slideWidth={1}
                speed={200}
                style={carouselStyles} >
                  {posts}
      </Carousel>
    </div>
  )
}

// =============================================
// const Decorators = [
//   {
//     component: createReactClass({
//       render() {
//         return (
//           <button
//             onClick={this.props.previousSlide}>
//             &lt;
//           </button>
//         )
//       }
//     }),
//     position: 'CenterLeft',
//     style: {
//       padding: 10,
//     }
//   },
//   {
//     component: createReactClass({
//       render() {
//         return (
//           <button
//             onClick={this.props.nextSlide}>
//             &gt;
//           </button>
//         )
//       }
//     }),
//     position: 'CenterRight',
//     style: {
//       padding: 10,
//     }
//   }
// ];

export default PostsCarousel
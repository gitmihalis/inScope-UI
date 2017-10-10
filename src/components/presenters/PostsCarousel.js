import React from 'react'
import Carousel from 'nuka-carousel'
// import createReactClass from 'create-react-class'
import PostCard from './PostCard'



const PostsCarousel = (props) => {
  // parse the posts data for the specific dateTime
  const postsSet = props.data.map( (item, index ) => {
    return (
      <PostCard card={item} key={index} />
    )
  })

  const carouselStyles = {
    touchAction: 'none',
    borderBottom: '1px solid #eee'
  }

  return (
    <Carousel decorators={[]}
              cellSpacing={20}
              dragging={true}
              easing="easeInOutElastic"
              edgeEasing="easeOutCirc"
              slidesToShow={1}
              speed={200}
              style={carouselStyles} 
    >
      {postsSet}
    </Carousel>
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
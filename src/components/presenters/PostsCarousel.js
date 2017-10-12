import React from 'react'
// TODO downgrade Nuka-Carousel to https://github.com/lyfeyaj/swipe/blob/master/react/swipe.jsx
import Carousel from 'nuka-carousel'
import { Container } from 'semantic-ui-react'
import PostCard from './PostCard'



const PostsCarousel = (props) => {
  const cards = props.cards.map( (card, index) => {
    console.log('card is ', card)
    return <div style={{padding: '13px'}}key={index}>
      {`${card.title}` }
      <p>{card.occurringAt}</p>
      </div>
  })

  const carouselStyles = {
    touchAction: 'none',
    display: 'block'
  }

  return (
    <Carousel decorators={[]}
              cellSpacing={20}
              cellAlign='center'
              dragging={true}
              easing="easeInOutElastic"
              edgeEasing="easeOutCirc"
              slidesToShow={1}
              speed={200}
              style={carouselStyles} >
      {cards}
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
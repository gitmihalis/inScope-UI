import React from 'react'
import { List, Container, Icon } from 'semantic-ui-react'
import moment from 'moment'

const cardStyles = {
  fontSize: '.8em',
  padding: '.2em',
}

const PostCard = (props) => {
  console.log('occurringAt:', props.post.occurringAt)
  const occurring = moment(props.post.occurringAt).format('DDMMYYY')
  const fromNow = moment(props.post.createdAt).fromNow()
  // truncate linkText to fit in post preview
  let linkOrText = (props.post.text) ? props.post.text : props.post.link
  let maxLen = ( linkOrText.length < 255 ) ? linkOrText.length : 255 
  linkOrText = linkOrText.substring(0, maxLen)
  console.log('formNow:', fromNow)

  const textStyles = {
  }

  const cardStyles = {
    padding: '2px',
    margin: '.1em 1em .1em 1em'
  }



  return (

    <div className='card' style={cardStyles}>
      <List bulleted horizontal>
        <List.Item>{props.scope}</List.Item>
        <List.Item>{fromNow}</List.Item>
        <List.Item>{props.post._creator.username}</List.Item>
      </List>

      <div>
        <span style={textStyles}>{linkOrText}</span>
      </div>
      <div>
        <List horizontal floated="right">
          <List.Item><Icon name="comment" />{props.post._comments.length}</List.Item>
        </List>
      </div>

    </div>
  )
}

export default PostCard
import React from 'react'
import { List, Container, Icon, Header, Card } from 'semantic-ui-react'
import moment from 'moment'

const cardStyles = {
  fontSize: '.8em',
  padding: '.2em',
}

const PostCard = (props) => {
  const occurring = moment(props.post.occurringAt).format('DDMMYYY')
  const fromNow = moment(props.post.createdAt).fromNow()
  // truncate linkText to fit in post preview
  let linkOrText = (props.post.text) ? props.post.text : props.post.link
  linkOrText = linkOrText.substring(0, 240)
  const linkIcon = typeof props.post.link === 'string' ? <Icon name="external" /> : '...'


 const carStyles = {
   height: '119px',
 }

 const wrapperStyles = {
  padding: '8px',
  margin: '2px'
 }


  return (
    <div style={wrapperStyles}>
    <Card fluid centered style={cardStyles}>
      <Card.Content>
          <List bulleted horizontal size='small' >
          <List.Item>{`in/${props.scope}`}</List.Item>
          <List.Item>{fromNow}</List.Item>
          <List.Item>{props.post._creator.username}</List.Item>
        </List>
        <Card.Description>{props.post.title} {linkIcon}</Card.Description>
        <Card.Meta textAlign='right'><Icon name="comment" />{props.post._comments.length}</Card.Meta>
      </Card.Content>
    </Card>
    </div>
  )
}

export default PostCard
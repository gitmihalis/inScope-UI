import React from 'react'
import { Comment, List } from 'semantic-ui-react'
import moment from 'moment'

const cardStyles = {
  fontSize: '.8em'
}

const PostCard = (props) => {
  const card = props.card
  const scope = 'slug-name-here'
  const creator = 'randomUser89'
  const voteScore = '809'
  const commentCount = '484'
  const dateStamp = moment().format("MMM Do YY");
  const desc = "Enim qui qui elit nisi occaecat elit ad veniam cillum exercitation exercitation."

  const divStyles = {
    overflowX: "hidden",
    textAlign: 'right'
  }
  return (
    <Comment.Group size='small'>
    <Comment>
      <Comment.Content>
        <Comment.Metadata>
          <List bulleted horizontal>
            <List.Item as='a'>About Us</List.Item>
            <List.Item as='a'>Sitemap</List.Item>
            <List.Item as='a'>Contact</List.Item>
          </List>
        </Comment.Metadata>
        <Comment.Text>{desc}</Comment.Text>
        <Comment.Metadata>
          <List bulleted horizontal>
            <List.Item as='a'>About Us</List.Item>
            <List.Item as='a'>Sitemap</List.Item>
            <List.Item as='a'>Contact</List.Item>
          </List>
        </Comment.Metadata>
      </Comment.Content>
    </Comment>
    </Comment.Group>
  )
}

export default PostCard
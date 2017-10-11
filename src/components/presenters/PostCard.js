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
  return (
    // TODO: card
    <div>==>>TODO</div>
  )
}

export default PostCard
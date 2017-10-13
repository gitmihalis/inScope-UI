import React from 'react'
import { Feed } from 'semantic-ui-react'
import moment from 'moment'

const cardStyles = {

}


const ScopeItem = (props) => {
    const formattedSlug = props.scope.slug.replace(/-/g, ' ')
    const beginning = moment(props.scope.beginningAt)
    const ending = moment(props.scope.endingAt)
    const spanning = ending.diff(beginning, 'days')
    const imageSrc = 'http://placeholder.pics/svg/300/8AFF41-0076FF/09FFA9'

    return (
        <Feed.Event>
            <Feed.Label image={imageSrc} />
            <Feed.Content>
                <Feed.Summary>
                {formattedSlug}
                </Feed.Summary>
                <Feed.Date>Spanning {spanning} Days</Feed.Date>
            </Feed.Content>
        </Feed.Event>
    )
}

export default ScopeItem
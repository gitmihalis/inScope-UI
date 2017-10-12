import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import axios from 'axios'

// get scopeQuery from props
class Scopes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scopes: []
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/api/in`)
    .then(res => {
        const data = res.data.data
      this.setState({ scopes: data})
    })
  }


  
  render = () => {
    const scopes = this.state.scopes.map( scope => {
      return <div key={scope._id}>{scope._id}</div>
    })
 
    // do for each in posts

    return (
      <div style={{
        marginTop: '3em'
      }}>
        {scopes}
      </div>
    )
  }

}

export default Scopes
import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import axios from 'axios'


const API = 'http://localhost:3000/api'
// get scopeQuery from props
export default class Scopes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scopes: []
    }
  }

  componentDidMount() {
    axios.get(API + '/in')
    .then(res => {
      this.setState({ data: res.data.data})
    });
  }


  
  render() {
    const scopes = this.state.scopes.map( scope => {
      return <div key={scope._id}>{scope._id}</div>
    })
 
    // do for each in posts

    return (
      <div>
        ... Scopes
      </div>
    )
  }

}
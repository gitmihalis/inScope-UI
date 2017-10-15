import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import ScopeItem from '../presenters/ScopeItem'
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
      this.setState({ scopes: res.data.data})
    });
  }


  
  render() {
    
    const scopes = this.state.scopes.map( scope => {
      return <ScopeItem key={scope._id} scope={scope} />
    })
 
    // do for each in posts

    return (
      <Feed>
        {scopes}
      </Feed>
    )
  }

}
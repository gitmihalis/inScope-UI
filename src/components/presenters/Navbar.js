import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu>
          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
            Browse
          </Menu.Item>

  
          <Menu.Menu position='right'>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
             Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }
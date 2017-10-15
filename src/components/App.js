// ====== Problem => when loading horizontal lists of carousels of varying heights
// content like text gets cut off, and carousels render at 160px height then collapse on resize
// ====== SOLUTION = > Will have to render carousel with static height
// ~ 100px for posts with a Link
// ~250px for posts with Text



import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import Navbar from './presenters/Navbar'
import Scopes from './containers/Scopes'
import Posts from './containers/Posts'
const API = 'http://localhost:3000/api'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className = 'App' >
                    <Navbar />
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={Scopes}/>
                            <Route exact path='/in/:scope' component={Posts} />
                        </div>
                    </BrowserRouter>
                <Container />
            </div>
        )
    }
}
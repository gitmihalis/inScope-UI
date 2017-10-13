import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import axios from 'axios'
import Navbar from './presenters/Navbar'
import Scopes from './containers/Scopes'
const API = 'http://localhost:3000/api'

export default class App extends Component {
    constructor() {
        super()
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
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
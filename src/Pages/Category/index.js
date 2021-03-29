import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import Category from '../../Components/Category'

export default class Browser extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Category/>
            </div>
        )
    }
}

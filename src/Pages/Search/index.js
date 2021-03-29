import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import Search from '../../Components/Search'

export default class Browser extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Search/>
            </div>
        )
    }
}

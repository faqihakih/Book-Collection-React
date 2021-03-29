import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import Detail from '../../Components/Borrow'

export default class Desc extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Detail/>
            </div>
        )
    }
}

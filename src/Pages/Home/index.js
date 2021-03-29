import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import Slider from '../../Components/Slider'
import Browser from '../../Components/Browser'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Slider/>
                <Browser/>
            </div>
        )
    }
}

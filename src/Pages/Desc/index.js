import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import Detail from '../../Components/Desc'
import Discuss from '../../Components/Discuss'

export default class Desc extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Detail/>
                <Discuss/>
            </div>
        )
    }
}

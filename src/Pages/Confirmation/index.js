import React, { Component } from 'react'
import Confirm from '../../Components/Comfirmation'
import Navbar from '../../Components/NavbarLogin'

export default class Confirmations extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Confirm/>
            </div>
        )
    }
}

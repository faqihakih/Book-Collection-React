import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import SideBar from '../../Components/SideBar'
import WaitingConfirmation from '../../Components/WaitingConfirmation'
export default class WaitingConfirmations extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
                <SideBar/>
                <WaitingConfirmation/>
                </div>
            </div>
        )
    }
}

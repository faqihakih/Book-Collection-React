import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import SideBar from '../../Components/SideBar'
import WaitingBorrow from '../../Components/WaitingBorrow'
export default class WaitingBorrows extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
                <SideBar/>
                <WaitingBorrow/>
                </div>
            </div>
        )
    }
}

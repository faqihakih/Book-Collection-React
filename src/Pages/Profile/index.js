import React, { Component } from 'react'
import Navbar from '../../Components/NavbarLogin'
import Profile from '../../Components/Profile'
import SideBar from '../../Components/SideBar'
export default class Profiles extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
                <SideBar/>
                <Profile/>
                </div>
            </div>
        )
    }
}

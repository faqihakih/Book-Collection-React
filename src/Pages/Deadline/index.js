import React, { Component } from 'react'
import Deadline from '../../Components/Deadline'
import Navbar from '../../Components/NavbarLogin'
import SideBar from '../../Components/SideBar'
export default class Deadlines extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
                    <SideBar />
                    <Deadline />
                </div>
            </div>
        )
    }
}

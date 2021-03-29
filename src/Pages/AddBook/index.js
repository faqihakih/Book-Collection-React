import React, { Component } from 'react'
import AddBook from '../../Components/AddBook'
import Navbar from '../../Components/NavbarLogin'
import SideBar from '../../Components/SideBar'
export default class AddBooks extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
                <SideBar/>
                <AddBook/>
                </div>
            </div>
        )
    }
}

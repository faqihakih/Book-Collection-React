import React, { Component } from 'react'
import Book from '../../Components/Book'
import Navbar from '../../Components/NavbarLogin'
import SideBar from '../../Components/SideBar'
export default class Books extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
                <SideBar/>
                <Book/>
                </div>
            </div>
        )
    }
}

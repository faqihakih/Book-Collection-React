import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="text-gray-600 body-font shadow-lg mb-8 fixed top-0 w-full z-10 bg-white">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                            <div>
                                <div className="bg-white flex items-center rounded-full border border-gray-700">
                                    <input className="rounded-full w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                                    <div className="p-2">
                                        <Link to="Search" className=" text-gray-700 rounded-full p-2 focus:outline-none w-5 h-5 flex items-center justify-center">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <Link to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                            <img src={Logo} alt="" srcSet className="h-12" />
                        </Link>
                        <Link className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0" to="/Profile">
                            <img src="https://res.cloudinary.com/zada/image/upload/v1614357120/avatar_y6a0zh.png" alt="" srcSet className="h-12" />
                        </Link>
                    </div>
                </header>
            </div>
        )
    }
}

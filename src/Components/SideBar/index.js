import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    render() {
        return (
            <div className="w-3/12 bg-white rounded p-3 fixed z-10 -mt-6">
                <ul className="space-y-2 text-sm">
                    <li className={(window.location.pathname === '/Profile' ? 'text-white bg-blue-500' : 'text-blue-500') + " mb-2 px-5 py-5 font-extrabold border-gray-300 rounded-full "}>                        <span>
                        <i className="far fa-user-circle" />
                    </span>
                        <Link to="/Profile">
                            <span className="ml-2">Profil</span>
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/Book' ? 'text-white bg-blue-500' : 'text-blue-500') + " mb-2 px-5 py-5 font-extrabold border-gray-300 rounded-full "}>
                        <span>
                            <i className="fas fa-book" />
                        </span>
                        <Link to="/Book">
                            <span className="ml-2">Books</span>
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/Deadline' ? 'text-white bg-blue-500' : 'text-blue-500') + " mb-2 px-5 py-5 font-extrabold border-gray-300 rounded-full "}>
                        <span>
                            <i className="far fa-clock" />
                        </span>
                        <Link to="/Deadline">
                            <span className="ml-2">Out Of Date</span>
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/WaitingBorrow' ? 'text-white bg-blue-500' : 'text-blue-500') + " mb-2 px-5 py-5 font-extrabold border-gray-300 rounded-full "}>
                        <span>
                            <i className="fas fa-hourglass-half" />
                        </span>
                        <Link to="/WaitingBorrow">
                            <span className="ml-2">Waiting Borrow</span>
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/Waiting' ? 'text-white bg-blue-500' : 'text-blue-500') + " mb-2 px-5 py-5 font-extrabold border-gray-300 rounded-full "}>
                        <span>
                            <i className="fas fa-check" />
                        </span>
                        <Link to="/Waiting">
                            <span className="ml-2">Waiting</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

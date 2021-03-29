import React, { Component } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Borrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date()
        }

        this.handleChangeDate = this.handleChangeDate.bind(this)
    }

    handleChangeDate(date) {
        this.setState({
            startDate: date
        })
    }

    render() {

        return (
            <div>
                <div className="text-gray-600 body-font overflow-hidden lg:mt-28 md:mt-40 sm:mt-64 xs:mt-64">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/3 w-10/12 lg:h-auto h-64 object-cover object-center rounded" src="https://res.cloudinary.com/zada/image/upload/v1614239364/image_12_scwwtk.png" />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-500 text-3xl title-font font-medium mb-1">At The Going Down of the Sun</h1>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">Marius Oelsching</h2>
                                <div className="flex mb-4 mt-2">
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </span></div>
                                <table className="table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="w-28">Publisher</td>
                                            <td>Gramedia Pustaka Utama</td>
                                        </tr>
                                        <tr>
                                            <td className="w-28">ISBN</td>
                                            <td>9786020385914</td>
                                        </tr>
                                        <tr>
                                            <td className="w-28">Pages</td>
                                            <td>376 hlm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap -m-12">
                            <div class="p-12 md:w-1/3 flex flex-col md:pt-36">
                                <span class="inline-block font-semibold text-xl text-gray-700  pb-4">Choose Date</span>
                                <div class="container mx-auto px-4 py-2 md:py-10">
                                    <div class="mb-5 w-64">
                                        <label for="datepicker" class="font-bold mb-1 text-gray-700 block">Select Date</label>
                                        <div class="relative pb-28">
                                            <DatePicker selected={this.state.startDate} onChange={this.handleChangeDate} className="text-black my-2 border border-black px-4 py-2 rounded-full focus:outline-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-12 md:w-2/3 flex flex-col items-start md:pt-36">
                                <span class="inline-block font-semibold text-xl text-gray-700 ml-10 lg:ml-10 md:ml-12 sm:ml-8 pb-4">Discussion</span>
                                <div class="container px-5 py-12 mx-auto">
                                    <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-4 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end -mt-10">
                                        <div class="relative flex-grow w-full">
                                            <input type="email" id="email" name="email" class="w-full h-16 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="flex justify-end mt-6">
                                        <button className="text-white bg-blue-700 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg" onClick={() => { console.log(new Date(this.state.startDate).toLocaleDateString('en-ZA')); }}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

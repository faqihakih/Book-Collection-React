import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Link } from 'react-router-dom'

export default class Slider extends Component {
    render() {
        return (
            <div className="mt-24">
                <span className="inline-block font-semibold text-2xl text-gray-700 ml-28 lg:ml-20 md:ml-12 sm:ml-8 pb-4">Popular</span>
                <OwlCarousel
                    className="owl-theme bg-slider"
                    items="3"
                    autoPlay
                    nav
                    dots
                    loop>
                    <div className="flex justify-center flex-row flex-nowrap mt-2 mx-2">
                        <div className="section bg-image overflow-hidden text-gray-800 lg:bg-gradient-to-r from-red-800 via-red-700 to-yellow-700 bg-opacity-90 md:bg-transparent sm:bg-white rounded-lg mx-2 lg:shadow-2xl md:shadow-none sm:shadow-none">
                            <Link to="/category">
                                <div className="grid md:grid-cols-2 w-3/4">
                                    <img src="https://res.cloudinary.com/zada/image/upload/v1614239364/image_12_scwwtk.png" alt="" srcSet />
                                    <div className="pt-4 pl-4">
                                        <div className="text px-2">
                                            <div className="text-2xl font-semibold">At The Going Down of the Sun</div>
                                            <p className="text-grey-darker text-base">Marius Oelsching</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        )
    }
}

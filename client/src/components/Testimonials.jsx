import React from 'react'
import ChooseUs from './ChooseUs'

export default function Testimonials() {
    return (
        <>
            <div className="flex justify-center space-x-44 text-left mt-20">
                <div className="w-1/2 ml-16">
                    <h1 className="text-xl font-bold mb-2 ml-16">OUR CUSTOMER STORIES</h1>
                    <h1 className="text-xl text-gray-500 font-semibold mb-10 ml-16">CHECK OUT OUR CASE STUDIES HERE</h1>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-[#EEEEEE] text-gray-600 rounded-none p-16">EasyShip has been a fantastic partner for our brand. As a small startup, we had numerous areas we have to cover, many which were outside our wheelhouse. We found Easyship and they helped us incorporate our fulfillment and order processing flow with ease. They offer great customer service and support, going above and beyond to help us get up to speed and ensure our logistics were covered. Thanks EasyShip!</div>
                        <div className="chat-footer">
                            <p className="text-xl font-bold">John Bentley</p>
                            <p className="text-xl font-light">Managing Director</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <ChooseUs />
                </div>
            </div>
        </>
    )
}

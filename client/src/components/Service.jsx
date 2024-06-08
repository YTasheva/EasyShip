import React from 'react'
import {ArrowRightCircleIcon} from '@heroicons/react/24/solid'

export default function Service() {
    return (
        <>
            <h1 className="text-sm text-[#8EBC42] font-medium mt-40 mb-2 text-center">Supercharge Your Shipping.
            </h1>
            <h1 className="text-4xl font-bold mb-10 text-center">Grow Your eCommerce Business!</h1>

            <div className="flex px-10">
                <div className="w-1/2 p-4">
                    <div className="card card-side bg-base-100 shadow-xl h-72 rounded-none">
                        <figure className="w-1/3">
                            <img src="./service1.jpg" alt="air" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body w-2/3">
                            <h2 className="card-title font-bold">EasyShip Collect</h2>
                            <p className="text-xl text-gray-600">
                            EasyShip Collect is the only shipping tool made special for crowdfunding. Launch your campaign with budget rates. 
                            Offer shipping upgrades via email survey at the end. It's personalized shipping that puts backers first.
                            </p>
                            <div className="card-actions justify-start mt-auto">
                                <a><p className="text-large font-bold flex items-center"><ArrowRightCircleIcon className="h-6 w-6"/> Read More</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-4">
                    <div className="card card-side bg-base-100 shadow-xl h-72 rounded-none">
                        <figure className="w-1/3">
                            <img src="./service2.jpg" alt="air" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body w-2/3">
                            <h2 className="card-title font-bold">Global Fulfillment</h2>
                            <p className="text-xl text-gray-600">
                            If you're not thinking internationally for your eCommerce business, you're depriving customers who want to buy your products. 
                            EasyShip strives to make shipping to 220+ countries as seamless as domestic.
                            </p>
                            <div className="card-actions justify-start mt-auto">
                            <a><p className="text-large font-bold flex items-center"><ArrowRightCircleIcon className="h-6 w-6"/> Read More</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="ml-14 mt-5 text-lg text-gray-600">Access the largest range of integrated couriers with discounted shipping rates and full import tax and duty visibility.<span className="font-bold"> Find Your Solutions</span></p>

        </>
    )
}
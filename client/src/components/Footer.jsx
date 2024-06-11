import React from 'react'
import {PhoneIcon} from '@heroicons/react/24/solid'
import {MapPinIcon} from '@heroicons/react/24/solid'
import {ChevronRightIcon} from '@heroicons/react/24/solid'
import Serviceimg from './Serviceimg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="bg-[#5D6C83] mt-20 p-8">
            <div className="relative flex justify-center items-center space-x-96 px-10 mb-10">
                <div className="absolute top-0 left-10 mr-10">
                    <h1 className="text-3xl font-semibold text-left text-gray-100 mb-5">Weekly Newsletter</h1>
                    <h1 className="text-sm font-semibold text-left text-gray-200">Get the latest news! </h1>
                </div>
                <div className="flex space-x-5">
                    <input type="text" placeholder="Enter Your Mail" className="input input-bordered w-80 max-w-md" />
                    <button className="btn bg-yellow text-white rounded-lg border-none">Subscribe</button>
                </div>
            </div>
            <footer className="footer p-10 bg-[#5D6C83] text-white">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p className="text-yellow">--------</p>
                    <p className="text-md text-gray-300 my-5">EasyShip is the leading shipping platform accelerating borderless eCommerce. Businesses of all sizes use our software to deliver their goods to buyers across the world.</p>
                    <h5 className="text-md text-gray-300 flex items-center"> <PhoneIcon className="h-4 w-4 mr-2"/>| (+1) 209 897 3212</h5>
                    <h5 className="text-md text-gray-300 flex items-center"><MapPinIcon className="h-4 w-4 mr-2"/>| 20 Levy Ave, California 600 </h5>
                </nav>
                <nav>
                    <h6 className="footer-title">Easyship in the News</h6>
                    <p className="text-yellow mb-5">--------</p>
                    <p className="text-md text-gray-300 flex items-center"> <ChevronRightIcon className="h-4 w-4 mr-2 -mt-4 text-yellow"/> EasyShip and Pitney Bowes Partner to Provide Ecommerce Sellers with a Better Way to Ship <br/> 5 Minutes Ago</p>
                    <p className="text-md text-gray-300 flex items-center"> <ChevronRightIcon className="h-4 w-4 mr-2 -mt-4 text-yellow"/> Time is ripe for APIs in logistics supply chain <br/> 5 Minutes Ago</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Customer Service</h6>
                    <p className="text-yellow mb-5">--------</p>
                    <a className="link link-hover text-gray-300 flex items-center"><ChevronRightIcon className="h-4 w-4 mr-2 text-yellow"/>What's New</a>
                    <a className="link link-hover text-gray-300 flex items-center"><ChevronRightIcon className="h-4 w-4 mr-2 text-yellow"/>Support Center</a>
                    <a className="link link-hover text-gray-300 flex items-center"><ChevronRightIcon className="h-4 w-4 mr-2 text-yellow"/>FAQS</a>
                    <a className="link link-hover text-gray-300 flex items-center"><ChevronRightIcon className="h-4 w-4 mr-2 text-yellow"/>Privacy Policy</a>
                    <a className="link link-hover text-gray-300 flex items-center"><ChevronRightIcon className="h-4 w-4 mr-2 text-yellow"/>Terms & Conditions</a>
                    <Link to="/contact" className="link link-hover text-gray-300 flex items-center"><ChevronRightIcon className="h-4 w-4 mr-2 text-yellow"/>Contact Us</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Customer Service</h6>
                    <p className="text-yellow mb-5">--------</p>
                    <div className="w-80"><Serviceimg/></div>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-[#5D6C83] text-white border-base-300">
                <aside className="items-center grid-flow-col">
                    <p>Copyright &copy; 2024 All Rights Reserved. Site By EasyShip&reg;</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

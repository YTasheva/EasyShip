
import React from 'react'
import {ChatBubbleLeftRightIcon} from '@heroicons/react/24/solid'

export default function News() {
  return (
    <>
    <h1 className="text-4xl font-bold text-center mb-2">EASYSHIP IN THE NEWS</h1>
    <div className="flex justify-center items-center space-x-2">
    <div className="w-5 h-5 bg-[#00C0E4] -mt-10"></div>
    <h1 className="text-lg text-gray-500 mb-10 text-center"> PRESS AND MEDIA RESOURCES</h1>
    </div>

    <div className="flex justify-center items-center space-x-10 px-10">

    <div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
        <figure className="w-1/3">
            <img src="./news1.jpg" alt="air" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
        <h2 className="card-title font-medium">TECH UPDATE</h2>
        <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 35 </h2>
        <p className="text-lg text-gray-500 group-hover:text-white">
        Hong Kong and New York-based Easyship joins Shopify Plus’ tech partner program..
        </p>
        <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
            <p>7</p>
            <p>JUNE</p>
        </div>
        </div>
    </div>

    <div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
        <figure className="w-1/3">
            <img src="./news2.jpeg" alt="air" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
        <h2 className="card-title font-medium">LOGISTICS UPDATE</h2>
        <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 20 </h2>
        <p className="text-lg text-gray-500 group-hover:text-white">
        Easyship and SEKO Logistics forge e-commerce partnership and now provides merchants US domestic returns, and branded email and tracking, regardless of the final mile postal carrier...
        </p>
        <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
            <p>1</p>
            <p>JUNE</p>
        </div>
        </div>
    </div>
    </div>


<div className="flex justify-center items-center space-x-10 px-10 mt-10">

<div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
    <figure className="w-1/3">
        <img src="./news3.jpg" alt="air" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
    <h2 className="card-title font-medium">POST & PARCEL</h2>
    <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 40 </h2>
    <p className="text-lg text-gray-500 group-hover:text-white">
    DHL Metro enters strategic partnership with Easyship to provide enhanced, affordable shipping solutions to SMB’s...
    </p>
    <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
        <p>28</p>
        <p>May</p>
    </div>
    </div>
</div>

<div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
    <figure className="w-1/3">
        <img src="./news4.jpg" alt="air" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
    <h2 className="card-title font-medium">SUPPLY CHAIN DIVE</h2>
    <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 15 </h2>
    <p className="text-lg text-gray-500 group-hover:text-white">
    Easyship, a Stripe for global e-commerce shipping, raises $4M. Its service adds shipment options to e-commerce pages to make it simple for retailers to offer overseas shipping, and customers to receive product in any market...
    </p>
    <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
        <p>21</p>
        <p>May</p>
    </div>
    </div>
</div>

</div>
    </>
  )
}
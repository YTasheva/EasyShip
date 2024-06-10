import React from 'react'

export default function Welcome() {
  return (
<div className="flex mt-40 px-8">

<div className="w-1/2">
<div className="h-100">
<img src="./welcome.png" className="w-full object-cover" />
</div>
</div>

<div className="w-1/2 pl-40">
<h1 className="text-5xl font-semibold mb-2">EasyShip Logistics</h1>
<h1 className="text-5xl font-semibold mb-2">Around <span className="text-red">the World</span></h1>
<p className="text-xl text-gray-600 mt-5">Boost revenue by selling worldwide, seamlessly. EasyShip does the hard work by integrating with leading international couriers, calculating tax and duty costs and preparing the right paperwork for smooth customs clearance and delivery. Learn how EasyShip handles customs clearance.</p>
<p className="text-xl text-gray-500 mt-5">EasyShip is seamlessly integrated with leading eCommerce platforms and marketplaces. You can manage all your shipments without writing a single line of code.</p>
<a className="btn bg-[#F5F5F5] text-[#4A6E7E] font-bold mt-10 rounded-none">See Our Integrated Platforms</a>
</div>
</div>
  )
}
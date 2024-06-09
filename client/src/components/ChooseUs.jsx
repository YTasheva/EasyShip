import React from 'react'

export default function ChooseUs() {
    return (
        <>
            <h1 className="text-xl font-bold mb-2">CHOOSE US</h1>
            <h1 className="text-xl text-gray-500 font-semibold mb-10">Access Our Network of Global Warehouses</h1>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-plus join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    Exclusive shipping discounts up to 91% off
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Delight Your Customers
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Improve Your Store. No Coding Necessary.
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Never Waste Time on Shipping Again
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </>
    )
}
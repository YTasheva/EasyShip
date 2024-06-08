import React from 'react'

export default function Clients() {
  return (
    <div className="flex justify-center space-x-24 text-left mt-20 mb-20">
        <div>
            <img src="./client1.png" alt="client1" className="h-14 object-cover"/>
        </div>
        <div>
            <img src="./client2.png" alt="client2" className="h-14 object-cover"/>
        </div>
        <div>
            <img src="./client3.png" alt="client3" className="h-14 object-cover"/>
        </div>
        <div>
            <img src="./client4.png" alt="client4" className="h-14 object-cover"/>
        </div>
        <div>
            <img src="./client5.png" alt="client5" className="h-14 object-cover"/>
        </div>
    </div>
  )
}
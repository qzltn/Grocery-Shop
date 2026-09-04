import React from 'react'
import imageD from "./assets/delivery_truck-BvY4lSkI.svg"
export const Delivery = () => {
  return (
<section className='bg-green-950 mt-30 m-5 rounded-2xl p-4 '>
<h1 className="text-3xl text-white mt-t p-5 text-center ">Get fresh groceries in minutes</h1>
<p className="text-gray-500 mt-5 text-center font-bold">Download the InstantMart app for exclusive deals, real-time tracking, and the freshest selection delivered right to your door.</p>
<div className="flex justify-center gap-1 mt-10">
<button className="bg-white text-green-700 rounded-2xl py-5 px-6">App store</button>
<button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">Google Play</button>
</div>
<div className='flex justify-center mt-10 m-10'>
<img  src={imageD} alt='image' />
</div>
</section>
  )
}

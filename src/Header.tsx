import React from 'react'
import headerimage from "../public/hero_bg-iD2fuyEl.jpeg";

const Header = () => {
  return (
    <header className="relative  rounded-lg m-3 px-4 bg-[url('/hero_bg-iD2fuyEl.jpeg')] py-6 bg-cover bg-center bg-no-repeat ">
      <div className="absolute inset-0 bg-gradient-to-r from-mamad  to-transparent"></div>
      <span className="z-50 mt-30 rounded-full border border-white/30 bg-white/20 px-2 py-3 text-black backdrop-blur-md text-orange-300 flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="z-50 lucide lucide-leaf size-3"
          aria-hidden="true"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
        Farm-Fresh & Organic
      </span>
      <h1 className="z-50 text-3xl font-bold mt-6">
        Nourish your home with
        <span className="text-orange-300 z-50">Earth's finest</span>
      </h1>
      <p className="mt-3 text-gray-500 mt-6 z-50">
        Fresh, organic groceries delivered from local farms to your doorstep.
        Quality you can taste, convenience you deserve.
      </p>
      <button className="mt-5 rounded-3xl bg-orange-400 text-white px-4 py-2 font-semibold ">
        Shop Now
      </button>
      <button className="rounded-full border border-white/30 bg-white/20 px-5 py-3 text-white backdrop-blur-md ">
        Browse Categories
      </button>
    </header>
  );
}

export default Header

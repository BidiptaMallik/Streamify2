import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between w-full font-semibold">

      <div className="flex items-center justify-between w-full">

        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 h-8 p-2 bg-black rounded-full cursor-pointer"
            src={assets.arrow_left}
            alt="Previous"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 h-8 p-2 bg-black rounded-full cursor-pointer"
            src={assets.arrow_right}
            alt="Next"
          />
        </div>

        <div className='flex items-center gap-4'>
           {/* You can add 'Explore Premium' or 'Install App' buttons here like Spotify */}
          <p className="flex items-center justify-center text-black bg-purple-500 rounded-full cursor-pointer w-7 h-7">
            S
          </p>
        </div>

      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="px-4 py-1 text-black bg-white cursor-pointer rounded-2xl">All</p>
        <p className="px-4 py-1 bg-[#242424] hover:bg-[#2a2a2a] cursor-pointer rounded-2xl">Music</p>
        <p className="px-4 py-1 bg-[#242424] hover:bg-[#2a2a2a] cursor-pointer rounded-2xl">Podcasts</p>
      </div>

    </div>
  )
}

export default Navbar
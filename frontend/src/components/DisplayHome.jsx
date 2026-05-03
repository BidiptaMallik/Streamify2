import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className='my-5'>
        <h1 className='mb-4 text-2xl font-bold'>Featured Charts</h1>

        <div className='flex gap-4 overflow-x-auto scrollbar-hide'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className='my-5'>
        <h1 className='mb-4 text-2xl font-bold'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
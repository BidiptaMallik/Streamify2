import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const DisplayAlbum = () => {

  const { id } = useParams()

  const { albumsData, songData, playWithId } = useContext(PlayerContext)

  const albumData = albumsData.find(item => item._id === id)

  const albumSongs = songData.filter(item => item.album === id)

  if (!albumData) return <div className='p-5 text-white'>Album not found</div>

  return (
    <>
      <Navbar />

      <div className='flex flex-col gap-8 mt-10 md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />

        <div className='flex flex-col'>
          <p>Playlist</p>

          <h2 className='mb-4 text-5xl font-bold md:text-7xl'>
            {albumData.name}
          </h2>

          <h4>{albumData.desc}</h4>

          <p className='mt-1'>
            <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
            <b> Streamify </b>
            {albumSongs.length} songs
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
      </div>

      <hr />

      {albumSongs.map((item, index) => (
        <div
          onClick={() => playWithId(item._id)}
          key={item._id}
          className='grid grid-cols-3 sm:grid-cols-4 items-center gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'
        >
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
            <img src={item.image} className='inline-block w-8 mr-5' alt="" />
            {item.name}
          </p>

          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>Recently added</p>
          <p className='text-[15px] text-center'>{item.duration || "--"}</p>
        </div>
      ))}

      {albumSongs.length === 0 && (
        <p className='mt-5 text-gray-400'>No songs in this album</p>
      )}
    </>
  )
}

export default DisplayAlbum
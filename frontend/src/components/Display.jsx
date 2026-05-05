import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { PlayerContext } from '../context/PlayerContext'

const Display = () => {

  const { albumsData } = useContext(PlayerContext)
  const location = useLocation()

  const isAlbum = location.pathname.includes('/album/')
  const id = isAlbum ? location.pathname.split('/').pop() : null

  const albumData = albumsData.find(item => item._id === id)

  const bgStyle = {
    background: isAlbum && albumData
      ? `linear-gradient(${albumData.bgColor}, #121212)`
      : '#121212'
  }

  return (
    <div
      style={bgStyle}
      className='w-full m-2 px-6 pt-4 rounded text-white overflow-y-auto overflow-x-hidden lg:w-[75%]'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
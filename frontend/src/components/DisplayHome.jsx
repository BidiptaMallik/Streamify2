import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import axios from 'axios'
import { PlayerContext } from '../context/PlayerContext'
import { toast } from 'react-toastify'

const url = 'http://localhost:4000'

const DisplayHome = () => {

  const { songData, setSongData, albumsData, setAlbumsData } = useContext(PlayerContext)

  const fetchSongs = async () => {
    try {
      const res = await axios.get(`${url}/api/songs/list`)
      if (res.data.success) {
        setSongData(res.data.songs)
      } else {
        toast.error("Failed to load songs")
      }
    } catch (err) {
      console.log(err)
      toast.error("Server error")
    }
  }

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(`${url}/api/albums/list`)
      if (res.data.success) {
        setAlbumsData(res.data.albums)
      } else {
        toast.error("Failed to load albums")
      }
    } catch (err) {
      console.log(err)
      toast.error("Server error")
    }
  }

  useEffect(() => {
    fetchSongs()
    fetchAlbums()
  }, [])

  return (
    <>
      <Navbar />

      <div className='my-5'>
        <h1 className='mb-4 text-2xl font-bold'>Featured Charts</h1>

        <div className='flex gap-4 overflow-x-auto scrollbar-hide'>
          {albumsData?.map((item) => (
            <AlbumItem
              key={item._id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item._id}
            />
          ))}
        </div>
      </div>

      <div className='my-5'>
        <h1 className='mb-4 text-2xl font-bold'>Today's Biggest Hits</h1>

        <div className='flex gap-4 overflow-x-auto scrollbar-hide'>
          {songData?.map((item) => (
            <SongItem
              key={item._id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
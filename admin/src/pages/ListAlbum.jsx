import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const url = 'http://localhost:4000'

const ListAlbum = () => {

  const [data, setData] = useState([])

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/albums/list`)

      if (response.data.success) {
        setData(response.data.albums)
      } else {
        toast.error("Failed to fetch albums")
      }

    } catch (error) {
      console.log(error)
      toast.error("Server error")
    }
  }

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/albums/remove`, { id })

      if (response.data.success) {
        toast.success("Album deleted")
        fetchAlbums()
      } else {
        toast.error("Delete failed")
      }

    } catch (error) {
      console.log(error)
      toast.error("Server error")
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  return (
    <div className='w-full'>
      
      <p className='mb-4 text-xl font-bold'>All Albums List</p>

      {/* Header */}
      <div className='grid grid-cols-[1fr_2fr_2fr_1fr] gap-4 bg-gray-200 p-3 font-semibold'>
        <p>Image</p>
        <p>Name</p>
        <p>Color</p>
        <p>Action</p>
      </div>

      {/* Data */}
      {data.map((item, index) => (
        <div 
          key={index} 
          className='grid grid-cols-[1fr_2fr_2fr_1fr] gap-4 items-center p-3 border-b'
        >
          <img src={item.image} className='w-12 rounded' alt="" />
          <p>{item.name}</p>

          {/* Background color preview */}
          <div className='flex items-center gap-2'>
            <div 
              className='w-6 h-6 rounded'
              style={{ backgroundColor: item.bgColor }}
            ></div>
            <p>{item.bgColor}</p>
          </div>

          <button 
            onClick={() => removeAlbum(item._id)}
            className='text-red-500 hover:underline'
          >
            Delete
          </button>
        </div>
      ))}

      {data.length === 0 && (
        <p className='mt-4 text-gray-400'>No albums found</p>
      )}

    </div>
  )
}

export default ListAlbum
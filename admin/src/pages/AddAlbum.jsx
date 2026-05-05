import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const url = 'http://localhost:4000'

const AddAlbum = () => {

  const [image, setImage] = useState(false)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    if (!image) {
      toast.error("Please upload album cover")
      return
    }

    try {
      setLoading(true)

      const formData = new FormData()
      formData.append('name', name)
      formData.append('desc', desc)
      formData.append('bgColor', bgColor)
      formData.append('image', image)

      const response = await axios.post(`${url}/api/albums/add`, formData)

      if (response.data.success) {
        toast.success("Album Added 🎉")

        setName("")
        setDesc("")
        setBgColor("#ffffff")
        setImage(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong ❌")
    } finally {
      setLoading(false)
    }
  }

  return loading ? (
    <div className='flex items-center justify-center h-[80vh] w-full'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-10 h-10 border-4 border-gray-300 rounded-full border-t-green-500 animate-spin'></div>
        <p className='text-lg font-medium text-gray-600'>Adding album...</p>
      </div>
    </div>
  ) : (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>

      <div className='flex flex-col gap-4'>
        <p>Upload cover</p>
        <input 
          onChange={(e)=>setImage(e.target.files[0])} 
          type="file" 
          id="image" 
          accept='image/*' 
          hidden
        />

        <label htmlFor="image" className="relative">
          <img 
            src={image ? URL.createObjectURL(image) : assets.upload_area} 
            className='w-24 cursor-pointer' 
            alt="" 
          />

          {image && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              ✔
            </span>
          )}
        </label>

        {image && <p className="text-sm text-green-600">{image.name}</p>}
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album name</p>
        <input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500' 
          placeholder='Type here' 
          type='text' 
          required 
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Description</p>
        <input 
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
          className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500' 
          placeholder='Type here' 
          type='text' 
          required 
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Background Color</p>
        <input 
          type="color"
          value={bgColor}
          onChange={(e)=>setBgColor(e.target.value)}
          className='w-24 h-10 border cursor-pointer'
        />
      </div>

      <button 
        className='text-base text-white bg-black px-14 py-2.5 cursor-pointer hover:bg-gray-800 transition' 
        type="submit"
      >
        ADD ALBUM
      </button>

    </form>
  )
}

export default AddAlbum
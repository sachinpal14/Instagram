import React from 'react'

const Buttons = () => {
  return (
    <div className='flex gap-4 mb-2 mt-2 justify-between'>
        <button className='ouline-none border-none  cursor-pointer bg-gray-500 rounded px-4 py-1 '>Edit Profile</button>
        <button className=' ouline-none border-none cursor-pointer bg-gray-500 rounded px-4  py-1  '>View Archive</button>
    </div>
  )
}

export default Buttons
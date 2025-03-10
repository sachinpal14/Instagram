import React from 'react'
import { IoSettings } from 'react-icons/io5'

const UpperProfile = () => {
  return (
    <div className=' flex w-full  justify-around '>
        <div className="left p-5  rounded-full border-gray-400">
            <img 
            className='rounded-full border-gray-500 w-full h-full' src=" https://th.bing.com/th/id/OIP.dlx6eIw_LFRufJVNRb7fcwHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        <div className="right  flex flex-col h-full  ">
            <div className="shortnav flex  w-full gap-5 px-4 items-center ">
                <h1>sachinpal14</h1>
                <button className='bg-gray-500 rounded px-4 py-1 txt-lg'>Edit Profile</button>
                <button className='bg-gray-500 rounded px-4 py-1 txt-lg'>View Archive</button>
                <IoSettings/>
            </div>
            <div className="followwerAndPost flex justify-between px-4 ">
                <div  className='flex gap-2 '>
                    <h2>18</h2>
                    <h1>Posts</h1>
                </div>
                <div className='flex gap-1 '>
                  <h2>220</h2>
                  <h1>Followers</h1>

                </div>
                <div className='flex gap-1 ' >
                <h2>0</h2>
                <h1>    Followings</h1>
                </div>
            </div>

            <div className="biosection px-4">
                <h1 className='font-semibold text-lg'>Sachin</h1>
                <h3 className='font-light '>Editor</h3>
                <p  className='text-'>Web Developer</p>
                 
                <p className='text-'>Edior and the Designer</p>
                <a href="https://my-portfolio-theta-kohl-41.vercel.app/">
                https://my-portfolio-theta-kohl-41.vercel.app/</a>
            </div>
        </div>
    </div>
  )
}

export default UpperProfile
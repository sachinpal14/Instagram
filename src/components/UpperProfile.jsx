import React from 'react'
import { IoSettings } from 'react-icons/io5'
import Bio from '../Bio'
import Buttons from './Buttons'

const UpperProfile = () => {
  return (
    <div className=' flex w-full md:justify-around items-center '>
        <div className="left md:border-t-1  md:border-b-1 border-b-gray-300 rounded-full border-t-gray-400">
            <img 
            className='rounded-full border-gray-500 md:w-52 md:h-52 w-20 h-20' src=" https://th.bing.com/th/id/OIP.dlx6eIw_LFRufJVNRb7fcwHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        <div className="right w-1/2 flex  md:flex-col md:flex-wrap h-full gap-y-5 ">
            <div className="shortnav hidden  md:flex w-full md:px-4 items-center gap-3 ">
                <h1 className=' font-semibold text-xl'>sachinpal14</h1>
                
             <div className='hidden md:inline-block bg-black '>
             <Buttons/>
             </div>
               
                <IoSettings className='hidden md:inline-block text-2xl'/>
            </div>
            <div className="followwerAndPost md:w-1/2 w-full   flex  md:justify-between px-4 gap-2 md:gap-5   flex-col md:flex-row ">
             <h1  className='md:hidden font-semibold'>Sachin</h1>
                <div className='flex gap-2'>
                <div  className='md:flex  gap-1 '>
                    <h2>18</h2>
                    <h1>Posts</h1>
                </div>
                <div className='md:flex gap-1 '>
                  <h2>220</h2>
                  <h1>Followers</h1>

                </div>
                <div className='md:flex gap-1 ' >
                <h2>0</h2>
                <h1>    Followings</h1>
                </div>
                </div>
            </div>

            <div className='hidden md:block'>
                <Bio/>
            </div>
        </div>
    </div>
  )
}

export default UpperProfile
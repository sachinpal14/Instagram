 import React from 'react'
import UpperProfile from './UpperProfile'
import Highlights from './Highlights'
import Post from './Post'
import Bio from '../Bio'
import Buttons from './Buttons'
 
 const Profile = () => {
   return (
     <div className=' w-full md:h-screen h-full flex flex-col  md:p-15 p-4 items-center space-y-5 gap-y-5'>
        <div className='w-full h-full md:w-fit md:h-fit'>
        <UpperProfile/> 
       <div className='md:hidden'>
       <Bio/>
       </div>
       <div className='md:hidden '>
        <Buttons/>
       </div>
        <Highlights/>
        <Post/> 
        </div>
     </div>
   )
 }
 
 export default Profile
 import React from 'react'
import UpperProfile from './UpperProfile'
import Highlights from './Highlights'
import Post from './Post'
 
 const Profile = () => {
   return (
     <div className=' w-full   h-screen  flex flex-col  items-center p-15  '>
        <div>
        <UpperProfile/>
        <Highlights/>
        <Post/>
        </div>
     </div>
   )
 }
 
 export default Profile
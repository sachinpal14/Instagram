 import React from 'react'
import UpperProfile from './UpperProfile'
import Highlights from './Highlights'
import Post from './Post'
 
 const Profile = () => {
   return (
     <div className=' w-full h-screen flex flex-col    p-15 items-center space-y-5 gap-y-5'>
        <div>
        <UpperProfile/>
        <Highlights/>
        <Post/>
        </div>
     </div>
   )
 }
 
 export default Profile
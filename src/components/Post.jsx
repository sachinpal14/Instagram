import React from 'react'

const Post = () => {
  return (
    <div className=' h-12 w-full flex flex-col  border-t-2 border-gray-600 gap-y-5 py-2'>
        <div className='flex justify-center items-center w-ful h-full gap-5 '>
            <h1 className='active:border-t-2 border-t-white' >Post</h1>
            <h1 className='active:border-t-2 border-t-white' >Reel</h1>
            <h1 className='active:border-t-2 border-t-white' >Saved</h1>
            <h1 className='active:border-t-2 border-t-white' >Tagged</h1>
        </div>
        <div className='w-full flex items-center justify-between px- 4  gap-5'> 
           <img 
           className=' h-56 w-56 '
           src="https://thumbs.dreamstime.com/z/initial-letter-sp-logotype-company-name-blue-circle-swoosh-design-vector-logo-business-identity-203854937.jpg" alt="" />
           <img 
           className=' h-56 w-56 '
           src="https://thumbs.dreamstime.com/z/initial-letter-sp-logotype-company-name-blue-circle-swoosh-design-vector-logo-business-identity-203854937.jpg" alt="" />
           <img 
           className=' h-56 w-56 '
           src="https://thumbs.dreamstime.com/z/initial-letter-sp-logotype-company-name-blue-circle-swoosh-design-vector-logo-business-identity-203854937.jpg" alt="" />
        </div>
        
    </div>
  )
}

export default Post
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border border-gray-300 p-4 flex justify-between px-10 sticky top-0 bg-white z-50'>
        <h1 className='text-2xl font-bold '>My Portfolio.</h1>
        <div className='flex gap-10 mt-2 '>
            <Link href= '/' >
            <div className='font-medium'>Home</div>
            </Link>
            <Link href= '/about' >
            <div className='font-medium'>About</div>
            </Link>
            <Link href= '/projects' >
            <div className='font-medium'>Projects</div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
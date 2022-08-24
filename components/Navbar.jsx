import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-800 w-screen items-center'>
        <div className='shadow-lg shadow-blue-300'>
            <Link href='./'><a><h1 className='text-2xl md:text-4xl font-semibold italic text-white py-5 text-center'>NEWS</h1></a></Link>
        </div>
    </div>
  )
}

export default Navbar
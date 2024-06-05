import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-blue-800 flex flex-col md:flex-row w-screen px-5 pr-10 py-8 shadow-lg shadow-blue-300'>
        <div className='md:justify-left justify-center w-full'>
          <a href="https://www.jeffawe.com"><p className='text-white font-light text-sm md:text-base md:text-left text-center cursor-pointer'>Designed by Jeffery Ozoekwe-Awagu</p></a>
        </div>

        <div className='md:justify-right justify-center w-full'>
          <p className='text-white font-light pt-2 md:pt-0 text-sm md:text-base md:text-right text-center'>Powered by <a href='https://mediastack.com/'>MediaStack</a> and <a href='https://alan.app/'>AlanAI</a>. Icon by Icon8</p>
        </div>
    </div>
  )
}

export default Footer
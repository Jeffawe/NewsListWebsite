import React from 'react'
import { BiError } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center flex-col pt-3 items-center'>
      <div className=''>
        <BiError size={100} color='blue' />
      </div>
      <div className='md:px-2 px-8'>
        <h1 className='text-center text-blue-800 text-xl md:text-2xl font-bold'>Page not Found</h1>
        <ul className='text-center py-1 text-blue-800 text-base md:text-lg pt-5 font-semibold'>This probably happened because:</ul>
        <li className='md:py-0 py-1 text-blue-800 text-base md:text-lg font-semibold'>Poor Network Connection</li>
        <li className='text-blue-800 text-base md:text-lg font-semibold'>The Keyword you requested is not currently available. Try another keyword</li>
        <li className='py-1 text-blue-800 text-base md:text-lg font-semibold'>The article request limit has been passed. We're sorry for this. Try again tomorrow</li>

      </div>
    </div>
  )
}

export default ErrorPage
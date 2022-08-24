import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='backgroundImage h-80' id='home'>
        <div className='md:p-12 p-8 items-center'>
            <h1 className='text-white font-semibold text-base md:text-3xl text-center capitalize'>Get the news from top sources all from here</h1>
            <p className='text-white text-normal text-sm md:text-xl text-center py-5'>Ask our Conversational AI or pick a category to look at</p>
            <div className='flex flex-col md:flex-row md:gap-x-5 gap-y-5 text-center py-2 md:py-5 px-5 md:px-0 justify-center'>
                <Link href='#AlanAI'><a><button className='transition duration-500 transform hover:-translate-y-2 rounded-full py-3 px-5 md:px-8 bg-blue-500 text-white'>Ask our AI</button></a></Link>
                <Link href='#categories'><a><button className='transition duration-500 transform hover:-translate-y-2 rounded-full py-3 px-5 md:px-8 bg-blue-500 text-white'>Check out Categories</button></a></Link>
            </div>
        </div>
    </div>
  )
}

export default Home
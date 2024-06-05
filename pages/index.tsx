import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Navbar, HomePage, AlanAIPage, Categories, Footer } from '../components'
import { useRouter } from 'next/router'


const Home: NextPage = ({ articles, onCategoryClick, getArticles }: any) => {
  const router = useRouter();

  return (
    <div className="scroll-smooth relative">
      <Head>
        <title>News List</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className='w-screen'>
        <Navbar />
        <HomePage />
        <AlanAIPage />
        <Categories onCategoryClick={onCategoryClick} />
        <Footer />
      </div>
    </div>
  )
}

export default Home

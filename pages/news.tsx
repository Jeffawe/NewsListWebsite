import type { NextPage } from 'next'
import { Navbar, Articles, Footer, ErrorPage } from '../components'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const news: NextPage = ({ articles, isLoading }: any) => {
    return (
        <div>
            <Head>
                <title>News List</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&display=swap" rel="stylesheet"></link>
            </Head>

            {(articles === null || articles === undefined) && (
                < div >
                    <Navbar />
                    <ErrorPage isLoading={isLoading}/>
                    <Footer />
                </div>
            )}
            {Array.isArray(articles) && articles.length === 0 && (
                < div >
                    <Navbar />
                    <ErrorPage isLoading={isLoading}/>
                    <Footer />
                </div>
            )}
            {Array.isArray(articles) && articles.length > 0 && (
                <div>
                    <Navbar />
                    <Articles articles={articles} />
                    <Footer />
                </div>
            )}
        </div >
    )
}

export default news

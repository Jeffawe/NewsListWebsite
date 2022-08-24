import type { NextPage } from 'next'
import { Navbar, Articles, Footer, ErrorPage } from '../components'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const news: NextPage = ({ articles }: any) => {
    const [theArticles, settheArticles] = useState([])
    const [variable, setvariable] = useState(0)


    // const router = useRouter()

    // useEffect(() => {
    //     const articleData:any = (router.query.data);
    //     const variable:any = (router.query.variable);
    //     settheArticles(articleData);
    //     setvariable(variable);

    //     return () => {

    //     }
    // }, [])

    // console.log(theArticles)


    return (
        <div>
            <Head>
                <title>News List</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&display=swap" rel="stylesheet"></link>
            </Head>


            {!articles.length &&
                <div>
                    <Navbar />
                    <ErrorPage />
                    <Footer />
                </div>
            }

            {articles.length > 0 &&
                <div>
                    <Navbar />
                    <Articles articles={articles} />
                    <Footer />
                </div>
            }
            {articles == null || undefined &&
                < div >
                    <Navbar />
                    <ErrorPage />
                    <Footer />
                </div>
            }
        </div >
    )
}

export default news
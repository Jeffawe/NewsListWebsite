import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { url } from 'inspector'

export type PropItems = {
  command: any;
  articles: [];
}

const alanKey = process.env.NEXT_PUBLIC_ALAN_KEY

function MyApp({ Component, pageProps }: AppProps) {
  const [articles, setarticles] = useState([]);
  const [isLoading, setisLoading] = useState(false)

  const router = useRouter()

  const goToNextPage = () => {
    router.push('/news')
  }

  const getArticles = async (number:any, searchTerm:any) => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    searchTerm = searchTerm.toString().toLowerCase().toString().split(" ").join('-');
    const BaseUrl =  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    let urlToUse = ` `
    switch(number) {
      case 1:
        urlToUse =  `${BaseUrl}`
        break;
      case 2:
        urlToUse = `${BaseUrl}&q=${searchTerm}`
        break;
      case 3:
        urlToUse = `${BaseUrl}&category=${searchTerm}`
        break;
      case 4:
        urlToUse = `${BaseUrl}&sources=${searchTerm}`
        break;
      default:
        urlToUse = `${BaseUrl}`
    }
    
    axios(urlToUse)
    .then((response) => {
      setarticles(response.data.articles)
      setisLoading(false)
      console.log(response.data.articles)
      console.log(urlToUse)
    })
    .catch((error) => {
      console.log("Error Fetching Data");
      setisLoading(false);
    })
  }

  const onCategoryClick = (event:any, category:String, search:any) => {
    let number = 0
    setarticles([])
    setisLoading(true)
    switch(category) {
      case 'Latest News':
        number = 1;
        break;
      case 'Term':
        number = 2;
        break;
      case 'Category':
        number = 3;
        break;
      case 'Source':
        number = 4;
        break;
      default:
        number = 1;
    }

    getArticles(number, search)
    goToNextPage()
  }

  useEffect(() => {
    setarticles([])
    setisLoading(true)
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}:PropItems) => {
          if(command == 'newHeadlines'){
              setarticles(articles);
              setisLoading(false)
              console.log(articles);
              goToNextPage();
          }
      }
    })

    return () => {
      // this now gets called when the component unmounts
    };
  }, [])

  return <Component {...pageProps} articles={articles} onCategoryClick = {onCategoryClick} getArticle={getArticles} isLoading={isLoading}/>
}

export default MyApp

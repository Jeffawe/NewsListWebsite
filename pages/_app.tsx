import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export type PropItems = {
  command: any;
  articles: [];
}

const alanKey = '2dc91ea71963dca449ce8cfa181664292e956eca572e1d8b807a3e2338fdd0dc/stage'

function MyApp({ Component, pageProps }: AppProps) {
  const [articles, setarticles] = useState([]);
  const [isLoading, setisLoading] = useState(false)

  const router = useRouter()

  const goToNextPage = () => {
    router.push('/news')
  }

  const getArticles = async (number:any, searchTerm:any) => {
    const API_KEY = '8d97f58e35ffb22bbcc02fe3f8056582'
    searchTerm = searchTerm.toString().toLowerCase().toString().split(" ").join('-');
    const BaseUrl = 'http://api.mediastack.com/v1/news?languages=en&sort=popularity'
    let urlToUse = ` `
    switch(number) {
      case 1:
        urlToUse =  `${BaseUrl}&access_key=${API_KEY}`
        break;
      case 2:
        urlToUse = `${BaseUrl}&keywords=${searchTerm}&access_key=${API_KEY}`
        break;
      case 3:
        urlToUse = `${BaseUrl}&categories=${searchTerm}&access_key=${API_KEY}`
        break;
      case 4:
        urlToUse = `${BaseUrl}&sources=${searchTerm}&access_key=${API_KEY}`
        break;
      default:
        urlToUse = `${BaseUrl}&access_key=${API_KEY}`
    }
    
    axios(urlToUse)
    .then((response) => {
      const { data } = response.data;
      setarticles(data)
      setisLoading(false)
      console.log(data)
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

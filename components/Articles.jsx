import React, { useEffect, useState } from 'react'
import SingleArticle from './SingleArticle'

const Articles = ({articles}) => {

  console.log(articles);

  return (
    <div className='md:px-12 px-5 py-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-8 gap-x-0 md:gap-x-5 '>
      {articles.map((article, i) => (
        <div key={i} className='bg-white rounded-lg block shadow-xl'>
          <a href={article.url}><SingleArticle article={article}/></a>
        </div>
      ))

      }
    </div>
  )
}

export default Articles
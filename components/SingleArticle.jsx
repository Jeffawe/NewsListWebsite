import React from 'react'
import { CgProfile } from "react-icons/cg";
import moment from 'moment';

const SingleArticle = ({ article }) => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='block'>
                {article.urlToImage &&
                    <img
                        src={article.urlToImage}
                        alt='Name'
                        className='h-auto w-full'
                        onError={event => {
                            event.target.src = "https://media.istockphoto.com/photos/news-picture-id157399872"
                            event.onerror = null
                          }}
                    />
                }

                {!article.urlToImage &&
                    <img
                        src={'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        alt='Name'
                        className='h-auto'
                    />
                }
            </div>
            <div className='flex flex-row p-5'>
                <div className='flex flex-row w-full gap-x-2'>
                    <CgProfile size={25} color='black' />
                    {article.author && article.author.toString().length <= 20 &&
                        <p className='text-black font-light text-sm pt-0.5 text-wrap'>{article.author}</p>
                    }
                    {article.author && article.author.toString().length > 20 &&
                        <p className='text-black font-light text-sm pt-0.5 text-wrap'> </p>
                    }
                </div>
                <div className='flex flex-row-reverse w-full'>
                    <span className='text-sm text-black font-light '>
                        {moment(article.publishedAt).format('MMM, DD, YYYY')}
                    </span>
                </div>
            </div>
            <div className='centerItem p-2 md:px-5 px-3'>
                <div className='text-center text-black font-semibold text-lg md:text-xl'>
                    <h1>{article.title}</h1>
                </div>
                <div className='text-center text-black font-normal text-base md:text-base py-3'>
                    <p>{article.description}</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-full p-5 pb-10'>
                <button className='transition duration-500 transform hover:-translate-y-2 rounded-full text-xs py-3 px-5 bg-blue-500 text-white'><a href={article.url}>Continue Reading</a></button>
            </div>
        </div>
    )
}

export default SingleArticle
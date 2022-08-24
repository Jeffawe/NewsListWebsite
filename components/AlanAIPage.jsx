import React from 'react'

const Categories = [
    {
        first: "You can ask for the latest news",
        title: " ",
        second: " ",
        third: "What is the Latest News"
    },
    {
        first: "You can ask for news through categories.",
        title: "Categories like:",
        second: "Business, Entertainment, Health, Science, Sports, Technology",
        third: "Give me the latest Entertainment News!"
    },
    {
        first: "You can ask for news through sources.",
        title: "Sources like:",
        second: "BBC News, CNN, Wired, Time, IGN",
        third: "Get the news from BBC News!"
    },
    {
        first: "You can ask for all articles on particular terms.",
        title: "Terms like:",
        second: "Marvel, Bitcoin, Cryptocurrency",
        third: "Tell me about Bitcoin."
    },
]

const AlanAIPage = () => {
    return (
        <div className='bg-blue-800 w-screen' id='AlanAI'>
            <div className=''>
                <h1 className='text-white p-10 py-14 text-lg md:text-2xl font-bold text-center'>Click on the Microphone at the bottom right to ask a question</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-rows-1 md:grid-rows-2 grid-rows-4 p-5 gap-5'>
                {Categories.map((category) => (
                    <div key={category.first} className='bg-black opacity-80 p-5 px-8 block rounded-2xl'>
                        <div className='col-start-1 col-end-2'>
                            <p className='text-white py-8 text-center text-lg font-semibold'>{category.first}</p>
                            <p className='text-white pt-8 text-center text-lg font-semibold'>{category.title}</p>
                            <p className='text-white pt-2 pb-8 text-center text-base'>{category.second}</p>

                            <p className='text-white text-lg text-semibold text-center pt-8'>Try Saying</p>
                            <p className='text-white italic pb-8 pt-2 text-center text-base'>{category.third}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlanAIPage
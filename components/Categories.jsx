import React, { useState } from 'react'

const DiffCategories = [
  { name: "Latest News", seachBar: false }, { name: "Categories", searchBar: true, search: "Category" }, { name: "Sources", searchBar: true, search: "Source" }, { name: "Terms", searchBar: true, search: "Term" },
]

const Categories = ({ onCategoryClick }) => {
  const [ShowSearchBar, setShowSearchBar] = useState(false);
  const [categoryName, setcategoryName] = useState('man');
  const [value, setvalue] = useState('')

  const openSearchBar = (name, searchBar) => {
    if (searchBar) {
      if (name) {
        name = name.toString();
        setcategoryName(name);
        setShowSearchBar(true);
        return;
      }
    }else {
      onCategoryClick(event, 'Latest News', ' ');
    }
  }

  return (
    <div className='py-20 bg-white' id='categories'>
      <div>
        <div className='p-5'>
          <h1 className='text-blue-500 text-2xl font-semibold text-center'>Pick one to make a search</h1>
        </div>
        <div className='flex md:flex-row md:gap-x-5 gap-y-5 flex-col p-5 centerItem justify-center'>
          {DiffCategories.map((category) => (
            <div key={category.name}>
              <button className='transition duration-500 transform hover:-translate-y-2 text-base md:text-lg rounded-full py-3 px-5 md:px-8 bg-blue-500 text-white' onClick={() => {openSearchBar(category.search, category.searchBar)}}>{category.name}</button>
            </div>
          ))}
        </div>
      </div>
      {ShowSearchBar &&
        <div className='flex flex-col md:flex-row justify-center centerItem py-5 gap-5 pt-12'>
          <input className="placeholder:text-blue-300 justify-center placeholder:italic placeholder:uppercase w-42 md:w-96 px-5 py-2 rounded-full outline-blue-500" placeholder={`Enter A ${categoryName}`} onChange={event => setvalue(event.target.value)}/>
          <button className='transition duration-500 transform hover:-translate-y-2 text-sm md:text-base rounded-full py-3 px-5 md:px-8 bg-blue-500 text-white' onClick={event => onCategoryClick(event, categoryName, value)}>Search</button>
        </div>
      }

      {!ShowSearchBar &&
        <div >

        </div>
      }
    </div>
  )
}

export default Categories
import React from 'react'
import '../style/search.css'

const Search = ({ placeholder, handleSearch, setUserName}) => {
  return (
    <>
      <div className='container' >
        <div className="searchbar">
          <div className="search-input">
            <input type="text" name='search' className="form-control" placeholder={placeholder}
              onChange={(e) => { setUserName((prev) => ({ ...prev, name: e.target.value })) }}
            />
            <button onClick={handleSearch} className="btn">Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search

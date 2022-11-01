import React from 'react'
import ReactDOM from 'react-dom/client'
function Search () {
    return(
        <div className='searchb'>
             <form className="ss d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
        </div>
    )
};
export default Search;
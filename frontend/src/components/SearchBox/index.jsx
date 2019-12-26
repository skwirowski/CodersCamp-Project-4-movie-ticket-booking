import React from 'react';
import 'css/Homepage.css';

const SearchBox = () => {
  return (
    <div className="form-control search-box" >
      <i className="fas fa-search prefix grey-text"></i>
      <input className="search-box-input" type="text" placeholder="Search..."></input>
      {/* <label for="materialFormCardNameEx" class="font-weight-light">Your name</label> */}
    </div>
  )
}

export default SearchBox;
import React from 'react';
import 'css/SearchBox.css'
const SearchBox = () => {
  return (
    <div class="ui right aligned transparent big fluid icon input">
      <input type="text" placeholder="Search..."></input>
      <i class="search icon"></i>
    </div>
  )
}

export default SearchBox;

import React from 'react';

const SearchBox = () => {
  return (
    <div className="form-control search-box" >
      <i className="fas fa-search prefix grey-text" />
      <input className="search-box-input" type="text" placeholder="Search..." />
      {/* <label for="materialFormCardNameEx" class="font-weight-light">Your name</label> */}
    </div>
  );
};

export default SearchBox;

import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className='pa2 tc'>
    <input
        className = 'pa2 ba b--green bg-lightest-blue' 
        type = 'search' 
        placeholder = 'Search robots' 
        onChange = {searchChange}
        />
    </div>
  );
}

export default SearchBox;
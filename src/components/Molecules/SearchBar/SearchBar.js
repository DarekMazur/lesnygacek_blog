import React from 'react';
import Icon from '../../Atoms/Icon/Icon';

const SearchBar = () => {
  return (
    <div>
      <Icon icon="fa" iconType={['fas', 'search']} light />
      <input name="search" />
      <label for="search">Search...</label>
    </div>
  );
};
export default SearchBar;

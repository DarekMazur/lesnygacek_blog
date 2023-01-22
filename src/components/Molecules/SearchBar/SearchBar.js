import React from 'react';
import Icon from '../../Atoms/Icon/Icon';

const SearchBar = () => {
  return (
    <div>
      <Icon icon="fa" iconType={['fas', 'search']} light />
      <input name="search" placeholder="serach..." />
    </div>
  );
};
export default SearchBar;

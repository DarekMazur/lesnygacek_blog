import React from 'react';
import Icon from '../../Atoms/Icon/Icon';
import { StyledSearchBar } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Icon icon="fa" iconType={['fas', 'search']} light size="small" />
      <input name="search" placeholder="serach..." />
    </StyledSearchBar>
  );
};
export default SearchBar;

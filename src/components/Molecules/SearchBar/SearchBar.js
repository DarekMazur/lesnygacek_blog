import React, { useEffect, useState } from 'react';
import Icon from '../../Atoms/Icon/Icon';
import { StyledSearchBar } from './SearchBar.styles';

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledSearchBar isActive={isActive}>
      <input name="search" placeholder="serach..." />
      <Icon icon="fa" iconType={['fas', 'search']} light size="small" onClick={handleClick} />
    </StyledSearchBar>
  );
};
export default SearchBar;

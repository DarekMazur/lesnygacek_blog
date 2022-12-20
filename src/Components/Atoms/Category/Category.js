import React from 'react';
import Icon from '../Icon/Icon';
import { StyledCategory } from './Category.styles';

const Category = ({ category, light }) => {
  const categoryIcon = {
    tools: 'axe',
    trips: ['fas', 'hiking'],
    thoughts: 'campfire',
    others: 'backpack',
  };

  const categoryTitle = {
    tools: 'Narzędzia',
    trips: 'Wyprawy',
    thoughts: 'Przemyślenia',
    others: 'Inne',
  };

  return (
    <StyledCategory light={light}>
      <Icon icon={Array.isArray(categoryIcon[category]) ? 'fa' : null} iconType={categoryIcon[category]} size="small" light={light} />
      <span>{categoryTitle[category]}</span>
    </StyledCategory>
  );
};

export default Category;

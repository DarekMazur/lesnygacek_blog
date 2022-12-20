import React from 'react';
import { categoryIcon, categoryTitle } from '../../../utils/helpers/category';
import Icon from '../Icon/Icon';
import { StyledCategory } from './Category.styles';

const Category = ({ category, light }) => {
  return (
    <StyledCategory light={light} data-testid={category}>
      <Icon icon={Array.isArray(categoryIcon[category]) ? 'fa' : null} iconType={categoryIcon[category]} size="small" light={light} />
      <span>{categoryTitle[category]}</span>
    </StyledCategory>
  );
};

export default Category;

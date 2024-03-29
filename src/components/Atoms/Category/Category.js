import { Link } from 'gatsby';
import React from 'react';
import { categoryIcon } from '../../../utils/helpers/category';
import Icon from '../Icon/Icon';
import { StyledCategory } from './Category.styles';

const Category = ({ category, light }) => {
  return (
    <StyledCategory light={light} data-testid={category.defaultIcon}>
      {console.log(category)}
      <Icon
        icon={Array.isArray(categoryIcon[category.defaultIcon]) ? 'fa' : null}
        iconType={categoryIcon[category.defaultIcon]}
        size="small"
        light={light}
      />
      <span>
        <Link to={`/category/${category.slug}`}>{category.title}</Link>
      </span>
    </StyledCategory>
  );
};

export default Category;

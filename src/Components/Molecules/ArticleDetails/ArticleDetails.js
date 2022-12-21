import React from 'react';
import Category from '../../Atoms/Category/Category';
import Title from '../../Atoms/Title/Title';
import { StyledArticleDetails } from './ArticelDetails.styles';

const ArticleDetails = ({ date, title, category }) => {
  return (
    <StyledArticleDetails>
      {date}
      <Title sub>{title}</Title>
      <Category category={category} />
    </StyledArticleDetails>
  );
};

export default ArticleDetails;

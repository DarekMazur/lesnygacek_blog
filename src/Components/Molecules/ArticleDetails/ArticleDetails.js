import React from 'react';
import Category from '../../Atoms/Category/Category';
import Title from '../../Atoms/Title/Title';
import { StyledArticleDetails } from './ArticelDetails.styles';

const ArticleDetails = ({ date, title, category, sub }) => {
  return (
    <StyledArticleDetails data-testid={title}>
      {sub ? (
        <>
          {date}
          <Title sub={sub}>{title}</Title>
        </>
      ) : (
        <>
          {<Title sub={sub}>{title}</Title>}
          {date}
        </>
      )}

      <Category category={category} />
    </StyledArticleDetails>
  );
};

export default ArticleDetails;

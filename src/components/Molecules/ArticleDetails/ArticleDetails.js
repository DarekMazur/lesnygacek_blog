import React from 'react';
import { dateToDisplay } from '../../../utils/helpers/dateToDisplay';
import Category from '../../Atoms/Category/Category';
import Title from '../../Atoms/Title/Title';
import { StyledArticleDetails } from './ArticelDetails.styles';

const ArticleDetails = ({ date, title, categories, sub, light }) => {
  return (
    <StyledArticleDetails data-testid={title}>
      {sub ? (
        <>
          {dateToDisplay(date)}
          <Title sub={sub} light={light}>
            {title}
          </Title>
        </>
      ) : (
        <>
          {<Title sub={sub}>{title}</Title>}
          {dateToDisplay(date)}
        </>
      )}

      {categories ? categories.map((category) => <Category key={category.title} category={category} light={light} />) : null}
    </StyledArticleDetails>
  );
};

export default ArticleDetails;

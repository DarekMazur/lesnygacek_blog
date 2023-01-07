import React from 'react';
import { dateToDisplay } from '../../../utils/helpers/dateToDisplay';
import Category from '../../Atoms/Category/Category';
import Title from '../../Atoms/Title/Title';
import { StyledArticleDetails } from './ArticelDetails.styles';

const ArticleDetails = ({ date, title, category, sub, light }) => {
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

      <Category category={category} light={light} />
    </StyledArticleDetails>
  );
};

export default ArticleDetails;

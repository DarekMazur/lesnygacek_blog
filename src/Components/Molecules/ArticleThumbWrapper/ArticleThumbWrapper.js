import React from 'react';
import { getDescription } from '../../../utils/helpers/getDescription';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import { StyledArticleThumbWrapper } from './ArticleThumbWrapper.styles';

const ArticleThumbWrapper = ({ post, home }) => {
  return (
    <StyledArticleThumbWrapper home={home}>
      <ArticleDetails date={post.publishedAt} title={post.title} category={post.category} light={!home} sub />
      <div>{getDescription(post.description, post.postBody)}</div>
    </StyledArticleThumbWrapper>
  );
};

export default ArticleThumbWrapper;

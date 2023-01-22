import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ArticleThumbWrapper from '../ArticleThumbWrapper/ArticleThumbWrapper';
import { StyledArticleThumb } from './ArticleThumb.style';

const ArticleThumb = ({ articleData, width, home }) => {
  const cover = getImage(articleData.cover?.file);
  return (
    <StyledArticleThumb as={Link} to={`/blog/${articleData.slug}`} width={width} home={home}>
      <GatsbyImage image={cover} alt={articleData.title} />
      <ArticleThumbWrapper post={articleData} home={home} />
    </StyledArticleThumb>
  );
};

export default ArticleThumb;

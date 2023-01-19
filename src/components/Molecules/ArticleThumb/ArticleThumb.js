import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ArticleThumbWrapper from '../ArticleThumbWrapper/ArticleThumbWrapper';
import { StyledArticleThumb } from './ArticleThumb.style';

const ArticleThumb = ({ articleData, width, home }) => {
  return (
    <StyledArticleThumb as={Link} to={articleData.slug} width={width} home={home}>
      <StaticImage
        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
        aspectRatio={5 / 3}
        formats={['auto', 'webp']}
      />
      <ArticleThumbWrapper post={articleData} home={home} />
    </StyledArticleThumb>
  );
};

export default ArticleThumb;

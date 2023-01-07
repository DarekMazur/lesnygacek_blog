import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { getDescription } from '../../../utils/helpers/getDescription';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import ArticleThumbWrapper from '../ArticleThumbWrapper/ArticleThumbWrapper';
import { StyledArticleThumb } from './ArticleThumb.style';

const ArticleThumb = ({ articleData, width, home }) => {
  return (
    <StyledArticleThumb as={Link} to="/singlePost" width={width} home={home}>
      <StaticImage
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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

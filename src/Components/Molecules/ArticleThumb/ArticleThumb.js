import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Category from '../../Atoms/Category/Category';
import Title from '../../Atoms/Title/Title';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const ArticleThumb = ({ articleData }) => {
  return (
    <div style={{ backgroundColor: '#EFEFEF', padding: '3rem', width: 'calc((100% - 10rem) / 2)', margin: '3rem' }}>
      <StaticImage
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
        aspectRatio={4 / 3}
        formats={['auto', 'webp']}
      />
      {/* ---- molecule ---- */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', JustifyContent: 'center', alignItems: 'center' }}>
        <p>{articleData.publishedAt}</p>
        <Title sub>Lorem Ipsum</Title>
        <Category category={articleData.category} />
      </div> */}
      <ArticleDetails date={articleData.publishedAt} title={articleData.title} category={articleData.category} />
      <div>{articleData.description}</div>
    </div>
  );
};

export default ArticleThumb;

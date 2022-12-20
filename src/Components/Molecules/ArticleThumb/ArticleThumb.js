import React from 'react';
import Category from '../../Atoms/Category/Category';
import Title from '../../Atoms/Title/Title';

const ArticleThumb = () => {
  return (
    <div style={{ backgroundColor: '#EFEFEF' }}>
      <div>image</div> //atom
      <div>
        {' '}
        //molecule
        <p>01.01.2000</p>
        <Title sub>Lorem Ipsum</Title>
        <Category category="tools" />
      </div>
      <div>shotened content</div>
    </div>
  );
};

export default ArticleThumb;

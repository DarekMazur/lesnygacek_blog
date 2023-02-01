import { Link } from 'gatsby';
import React from 'react';

const CategoryPage = ({ pageContext }) => {
  const { category } = pageContext;
  return (
    <div>
      {console.log(category.posts)}
      <h3>{category.title}</h3>
      <ul>
        {category.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;

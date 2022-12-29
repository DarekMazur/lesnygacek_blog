import React from 'react';
import InstaThumb from '../../Molecules/InstaThumb/InstaThumb';

const InstaGrid = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <InstaThumb key={item.id} imgUrl={item.media_url} count={item.like_count} link={item.shortcode} />
      ))}
    </>
  );
};

export default InstaGrid;

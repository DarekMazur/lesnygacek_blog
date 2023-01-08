import React from 'react';
import InstaThumb from '../../Molecules/InstaThumb/InstaThumb';
import { StyledGrid } from './InstaGrid.styles';

const InstaGrid = ({ data }) => {
  return (
    <StyledGrid>
      {data.map((item) => (
        <InstaThumb key={item.id} imgUrl={item.media_url} count={item.like_count} link={item.shortcode} />
      ))}
    </StyledGrid>
  );
};

export default InstaGrid;

import React, { useEffect, useState } from 'react';
import { theme } from '../../../utils/themes/theme';
import InstaThumb from '../../Molecules/InstaThumb/InstaThumb';
import { StyledGrid } from './InstaGrid.styles';

const InstaGrid = () => {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    width < theme.breakpoints.wide ? setLimit(6) : setLimit(8);
  }, [width]);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://graph.facebook.com/v15.0/${process.env.GATSBY_IG_USER}/media?fields=id,media_type,media_url,shortcode,like_count&limit=8&access_token=${process.env.GATSBY_IG_KEY}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Something went wrong');
        })
        .then((result) => {
          setData(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <StyledGrid>
      {data
        ? data.slice(0, limit).map((item) => <InstaThumb key={item.id} imgUrl={item.media_url} count={item.like_count} link={item.shortcode} />)
        : null}
    </StyledGrid>
  );
};

export default InstaGrid;

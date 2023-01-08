import React from 'react';
import Button from '../../Atoms/Button/Button';
import Wrapper from '../Wrapper/Wrapper';

const Pagination = () => {
  return (
    <Wrapper align={{ justify: 'space-between' }}>
      <Button primaryText={'Previous'} secondaryText={'Go on!'} />
      <Button primaryText={'Next'} secondaryText={'Go on!'} />
    </Wrapper>
  );
};

export default Pagination;

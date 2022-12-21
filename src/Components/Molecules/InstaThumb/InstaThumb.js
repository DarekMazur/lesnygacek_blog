import React from 'react';
import Icon from '../../Atoms/Icon/Icon';
import { StyledInstaThumb } from './InstaThumb.styles';

const InstaThumb = () => {
  return (
    <StyledInstaThumb count={276}>
      <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/108178273_279608483306116_6622590761417733037_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kkIl3QS-B1QAX-ctX0o&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfAkN5rU42e4QPalQQ08OVDFGA_N1FN9EoeW-Bnt8TLJQw&oe=63A8FBDC" />
      <div>
        <Icon icon={'fa'} iconType={['fas', 'heart']} size="default" /> 276
      </div>
    </StyledInstaThumb>
  );
};

export default InstaThumb;

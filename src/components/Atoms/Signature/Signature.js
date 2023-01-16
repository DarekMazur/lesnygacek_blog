import React from 'react';
import { P } from '../P/P.styles';

const Signature = ({ author }) => {
  return (
    <P options={{ justify: 'right', width: '100%' }}>{author.sign ? <img style={{ height: '6rem' }} src={author.sign?.file.url} /> : author.name}</P>
  );
};

export default Signature;

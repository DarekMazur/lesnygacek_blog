import React from 'react';
import { P } from '../P/P.styles';

const Signature = ({ author }) => {
  return <P options={{ justify: 'right', width: '100%' }}>{author}</P>;
};

export default Signature;

import React from 'react';
import { LoaderElement } from '../../Atoms/LoaderElement/LoaderElement.styles';
import { Loader, LoaderWrapper } from './Loading.styles.';

const Loading = () => {
  return (
    <LoaderWrapper>
      <Loader>
        <LoaderElement />
        <LoaderElement />
        <LoaderElement />
        <LoaderElement />
      </Loader>
    </LoaderWrapper>
  );
};

export default Loading;

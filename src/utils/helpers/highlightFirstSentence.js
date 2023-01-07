import React from 'react';
import { P } from '../../Components/Atoms/P/P.styles';
import { Span } from '../../Components/Atoms/Span/Span.styles';

export const highlightFirstSentence = (string) => {
  const highlited = {
    firstSentence: string.split('.', 1).join('.'),
    other: string.split('.').slice(1).join('.'),
  };

  return highlited;
};

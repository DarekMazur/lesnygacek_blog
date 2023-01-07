export const highlightFirstSentence = (string) => {
  const highlited = {
    firstSentence: string.split('.', 1).join('.'),
    other: string.split('.').slice(1).join('.'),
  };

  return highlited;
};

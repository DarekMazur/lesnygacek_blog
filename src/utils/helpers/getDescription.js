export const getDescription = (description, content) => {
  if (description) {
    return description;
  } else {
    const generatedDescription = content.split('').slice(0, 170).join('');
    return `${generatedDescription}[...]`;
  }
};

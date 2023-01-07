export const dateToDisplay = (date) => {
  const Day = new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate();
  const Month = new Date(date).getMonth() + 1 < 10 ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth() + 1;
  const Year = new Date(date).getFullYear();

  const propperDate = `${Day}.${Month}.${Year}`;
  return propperDate;
};

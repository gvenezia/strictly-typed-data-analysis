export const parseDate = (date: string): Date => {
  const dateParts = date.split("/").map(val => +val);
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

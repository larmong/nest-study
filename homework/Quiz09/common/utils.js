export const hyphenAddToPhone = (value) => {
  return value.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

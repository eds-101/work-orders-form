export const putStringsInArray = (
  string: string,
  array: String[]
) => {
  let line = string.split(' ');
  line.forEach((el: string) => {
    array.push(el);
  });
};

const convertStringToJson = (string) => {
  // Воспользуемся встроенной функцией eval и переведем строку в json объект
  const json = eval("(" + string + ")");
  return json;
};

const jsonString =
  '{"swimmer": "Michael Phelps", "basketballPlayer": "Stephen Curry", "hockeyPlayer": "Alexander Ovechkin"}';
const jsonObject = convertStringToJson(jsonString);

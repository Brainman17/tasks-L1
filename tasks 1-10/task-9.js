const convertToJsonString = (value) => {
  // Создаем переменную со значением строки, которую будем по итогу возвращать
  let jsonString = "";

  // Проверяем по типам.
  // Если приходит строка, добавляем в переменную ее значение
  if (typeof value === "string") {
    jsonString += value;
  } else if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null
  ) {
    // Если number, boolean или null, явно приводим их к строке
    jsonString += String(value);
  } else if (Array.isArray(value)) {
    // Если значение - массив, замапим его,
    // воспользуемся рекурсией и сохраним значения в переменную elements
    const elements = obj.map((element) => convertToJsonString(element));
    // Полученный массив переведем в строку и присвоим jsonString
    jsonString += elements.join(",");
  } else if (typeof value === "object") {
    // Если значение является объектом, переводим с помощью Object.keys его в массив,
    // мапим и возвращаем отформатированный объект
    const properties = Object.keys(value).map(
      (key) => `${key}: ` + convertToJsonString(value[key])
    );
    jsonString += properties.join(", ");
  }

  return jsonString;
};

const object = { user: "Andrey", age: 11, job: "programmer" };

const jsonString = convertToJsonString(object);

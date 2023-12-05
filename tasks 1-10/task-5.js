const jsonToLinkedList = (json) => {
  // Сначала преобразуем приходящий json в JS-объект
  const data = JSON.parse(json);
  // Создаем две переменные.
  // Одну назовем cap - колпачек, то есть верхушка списка
  let cap = null;
  // Вторую current - для хранения текущего узла
  let current = null;

  // Далее перебираем data и для каждого элемента создаем новый узел связанного списка
  // с указанным значением и next равным null.
  data.forEach((item) => {
    const node = { value: item, next: null };
    // Проверяем, если колпачек равен null, значит это первый элемент списка,
    // поэтому устанавливаем cap и current текущий узел node
    if (!cap) {
      cap = node;
      current = node;
    } else {
      // Иначе в следующий узел устанавливаем node
      current.next = node;
      current = node;
    }
  });

  return cap;
};

const json =
  '[{"country": "Russia", "capital": "Moscow"}, {"country": "Japan", "capital": "Tokyo"}, {"country": "Kenya", "capital": "Nairobi"}]';

jsonToLinkedList(json);

export default jsonToLinkedList;

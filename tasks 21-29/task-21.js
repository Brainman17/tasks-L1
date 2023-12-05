const stackSize = () => {
  // Иницилизируем начальное значение, которое будем использовать в подсчете стека
  let size = 0;

  // Создаем рекурсивную функцию plusStackSize, которая вызывает саму себя бесконечное количество раз
  const plusStackSize = () => {
    size++;
    plusStackSize();
  };

  // С помощью конструкции try catch выбрасываем ошибку, когда размер стека переполнен
  try {
    plusStackSize();
  } catch (e) {
    return size;
  }
};

// console.log(stackSize());

// Таким образом, Сhrome выдал значение в 9189 байтов
// Yandex - 11049

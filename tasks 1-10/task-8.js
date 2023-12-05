const fcArray = [
  () => {
    console.log(1);
  },
  () => {
    console.log(2);
  },
  () => {
    console.log(3);
  },
];

const functionWithClosure = (fcArray) => {
  // Возвращаем новую функцию
  return () => {
    // Создаем новый массив, чтобы его вернуть
    let array = [];
    // Перебираем приходящий в параметрах массив функций
    fcArray.forEach((fc) => {
      // Пушим в него вызов функций
      array = [...array, fc()];
    });
    // Возвращаем массив
    return array;
  };
};

// Сохраняем первый вызов в переменную
const functionCall = functionWithClosure(fcArray);
// И вызываем его
// functionCall();

const isStrangeNumber = (number) => {
  let sum = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
};

// Функция принимает число, в цикле for проходит через все делители этого числа и проверяет:
// если нет остатка(то есть число целое), то к переменной let, равной начальному нулю и объявленной за циклом,
// суммирует все делители.

isStrangeNumber(12); // false
isStrangeNumber(6); // true

export default isStrangeNumber;

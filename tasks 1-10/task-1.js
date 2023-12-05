const isPallindrome = (string) => {
  return string === string.split("").reverse().join("");
};
// Преобразовываем строку в массив, чтобы иметь возможность ее развернуть, после - снова в строку

isPallindrome("шалаш"); // true

export default isPallindrome;

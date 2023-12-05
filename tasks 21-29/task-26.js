// Будем передавать в функцию элемент и действие, которое с ним выполняется.
const traverseDOM = (element, action) => {
  // Выполняем действие с текущим элементом
  action(element);

  // Рекурсивно обходим детей текущего элемента
  Array.from(element.children).forEach((child) => {
    traverseDOM(child, action);
  });
};

// Достаем body, чтобы обойти весь DOM
const rootElement = document.querySelector("body");
traverseDOM(rootElement, (node) => {
  // Выводим информацию о теге в консоль
  //   console.log(node.tagName);
});

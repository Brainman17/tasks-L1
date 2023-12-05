const createAndStyleElement = (tag, text, styles) => {
  // Создадим новый элемент
  const element = document.createElement(tag);

  // Добавим ему текст
  element.textContent = text;

  // Добавим в DOM
  document.body.appendChild(element);

  // C помощью Object.assign поверхностным копированием скопируем свойства объекта стилей в свойство style.
  // Первым параметром он принимает целевой объект, в который будут скопированы свойства.
  // В нашем случае element.style. И дополнительный объект, свойства которого будут скопированы.
  Object.assign(element.style, styles);
};

const styles = {
  color: "white",
  display: "block",
  backgroundColor: "#174057",
  fontSize: "18px",
  border: "none",
  width: "200px",
  height: "50px",
  cursor: "pointer",
};

// Вызовем
createAndStyleElement("button", "Кнопка", styles);

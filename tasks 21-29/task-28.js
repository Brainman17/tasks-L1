const createAndAppendElement = (
  parentElement,
  templateId,
  newElementId,
  newElementText
) => {
  // Получаем шаблон из тега <template>
  const template = document.getElementById(templateId);

  // Клонируем содержимое шаблона
  const clone = document.importNode(template.content, true);

  // Находим элемент внутри склонированного шаблона
  const newElement = clone.querySelector(`#${newElementId}`);

  // Устанавливаем текст новому элементу
  newElement.textContent = newElementText;

  // Добавляем новый элемент в родительский элемент
  parentElement.appendChild(clone);
};

const parentElement = document.querySelector("#parentElement");
const templateId = "myTemplate";
const newElementId = "newElement";
const newElementText = "Templaaaaate";

createAndAppendElement(parentElement, templateId, newElementId, newElementText);

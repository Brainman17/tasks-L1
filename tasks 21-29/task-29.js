const myForm = document.querySelector("#myForm");

const handleFormSubmit = (event) => {
  // Отменяем стандартное поведение
  event.preventDefault();

  // Получаем все инпуты на форме
  const inputs = myForm.querySelectorAll("input");

  // Создаем пустой объект, в который будем добавлять данные
  const data = {};

  // Проходимся по каждому инпуту и добавляем его значение в объект
  inputs.forEach((input) => {
    data[input.name] = input.value;
  });

  // Выводим полученные данные в консоль
  console.log(data);
};

myForm.addEventListener("submit", handleFormSubmit);

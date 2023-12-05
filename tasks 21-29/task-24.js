// !!! В запросе http, но при деплое такие протоколы будут блокироваться, локально все работает !!!

// Возьмем сразу элементы
const table = document.querySelector("table");
const tableBody = table.querySelector("#table-rows");
const columnHeader = table.querySelectorAll("th");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Создадим пустой массив.
// Во время первой загрузки страницы запушим в него первоначальные 50 строк данных.
// И в будущем в момент нажатия на кнопки для показа следующих/предыдущих элементов,
// будем добавлять или удалять их из массива.
let history = [];

// С помощью ключевого слова fetch и try/catch сделаем асинхронный запрос к серверу, возьмем данные
const fetchData = async (rows = 50) => {
  try {
    const response = await fetch(
      `http://www.filltext.com/?rows=${rows}&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true`
    );
    const data = await response.json();

    history.push(data);

    // Задизейблим кнопку prev, если в массиве один массив
    history.length === 1
      ? (prevBtn.disabled = true)
      : (prevBtn.disabled = false);

    displayData(data);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

// Создадим функцию, отвечающую за отображение элементов на странице.
// И вызовем ее в момент первой загрузки страницы.
const displayData = (data) => {
  data.forEach((rowData) => {
    const row = document.createElement("tr");
    Object.values(rowData).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
};

// Рендер
fetchData(50);

// Cоздадим функцию, которая удаляет 50 строк.
// Она нужна для того, чтобы в момент нажатия на кнопку 'Показать следующие 50 строк' удаляла предыдущие 50.
// В противном случае их будет 100+.
const removePreviousRows = () => {
  const rows = Array.from(tableBody.children);
  rows.forEach((row) => {
    tableBody.removeChild(row);
  });
};

// Кнопка для вставки строк
nextBtn.addEventListener("click", () => {
  // Вызываем ф-цию удаления
  removePreviousRows();
  // Еще раз вызываем рендеринг данных, но уже следующих 50 строк
  fetchData(50);
});

// Кнопка для удаления строк
prevBtn.addEventListener("click", () => {
  // Ф-ция удаления
  removePreviousRows();
  // Удаляем последний элемент массива
  history.pop();
  const lastElement = history[history.length - 1];

  history.length === 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);

  // А в вызов функции отображения данных передаем последний элемент после удаления
  displayData(lastElement);
});

// Cортировка в прямом порядке
const sortTableByColumn = (table, columnIndex) => {
  const tbody = table.querySelector("tbody");
  const rows = [...tbody.querySelectorAll("tr")];

  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent;
    const bValue = b.cells[columnIndex].textContent;
    return aValue.localeCompare(bValue);
  });

  rows.forEach((row) => tbody.appendChild(row));
};

// Сортировка в обратном порядке
const sortTableByColumnReverse = (table, columnIndex) => {
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();
    return bValue.localeCompare(aValue);
  });

  rows.forEach((row) => tbody.appendChild(row));
};

// Вызов сортировки при клике на заголовкам столбцов
columnHeader.forEach((header, index) => {
  header.addEventListener("click", () => {
    sortTableByColumn(table, index);
  });
});

// Вызов сортировки в обратном порядке
columnHeader.forEach((header, index) => {
  let reverseSort = false;
  header.addEventListener("click", () => {
    if (!reverseSort) {
      sortTableByColumn(table, index);
      reverseSort = true;
    } else {
      sortTableByColumnReverse(table, index);
      reverseSort = false;
    }
  });
});

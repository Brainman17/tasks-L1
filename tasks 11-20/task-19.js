// Возьмем элемент виджета из html
const widget = document.querySelector(".widget");

// Узнаем токен, который поможет отправлять запрос к API VK
const token =
  "vk1.a.cM4LFjZiiRmRhDnjbrC3sOTUf5jIYWmV7BN6gDzmmOrntFi8lQdOJJBC6j1xrtZN6GxOOV-4C0VPFjBs9f3pZGEOp1n_PhThuEQahui0JCpsBPCE_ozIc1tJ3_SuGsNMLZhbp0J_nMt6rA5Wu1iTH_W7ouYnoyBex_mRWJ-mK13hm6k1v8_4B59jkG5_wB9-VWtBhW2GrjUHf_J0UFK4pQ";

// Достанем ID группы и ID приложения, которое я создал
const groupId = -18972925;
const clientID = 51807690;

// Сконструируем базовый URL
const apiUrl = `https://api.vk.com/method/wall.get?owner_id=${groupId}&filter=owner`;

// C помощью протокола JSONP от VK сделаем кросс-доменный запрос, чтобы самостоятельно не создавать пркоси-сервер.
// И получим данные группы.
const getPosts = (offset, count) => {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src =
      apiUrl +
      "&count=" +
      count +
      "&offset=" +
      offset +
      `&access_token=${token}&v=5.131` +
      "&callback=callbackFunc";
    document.body.appendChild(script);

    window.callbackFunc = (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        const posts = response.response.items;
        resolve(posts);
      }
      document.body.removeChild(script);
    };
  });
};

// Отрендерим посты
const renderPosts = (posts) => {
  posts.forEach((post, i) => {
    const postElement = document.createElement("div");
    const isPost = post.text
      ? post.text
      : "Тут, по идее, должен быть пост № " + (i + 1);
    postElement.innerHTML = `
          <p class="post">${isPost}</p>
        `;
    widget.appendChild(postElement);
  });
};

// Создадим функцию для загрузки новых постов, которую будем вызывать, когда доскроллим вниз
const loadPosts = () => {
  if (loadPosts.offset === undefined) {
    loadPosts.offset = 0;
  }
  const count = 10;

  // Предадим ответ сервера в функцию сохранения данных в localStorage
  getPosts(loadPosts.offset, count)
    .then((data) => {
      saveDataToCache(data);
    })
    .catch((error) => {
      console.error(error);
    });

  loadPosts.offset += 10;
};

loadPosts();

// Вешаем обработчик на scroll
widget.addEventListener("scroll", function () {
  const bottomOffset = this.scrollHeight - this.scrollTop - this.clientHeight;

  if (bottomOffset <= 0.5) {
    loadPosts();
  }
});

// Создадим функцию, которая будет обрабатывать новые и загруженные данные в localStorage
function saveDataToCache(data) {
  // Получим ранее сохраненные данные (если есть)
  const cachedData = JSON.parse(localStorage.getItem("widgetData")) || [];

  // Объединим новые данные с ранее сохраненными
  const allData = [...cachedData, ...data];

  // Сохраним все данные в LS
  localStorage.setItem("widgetData", JSON.stringify(allData));

  // Передадим их в функцию рендера
  renderPosts(allData);

  // И для обновления local Storage
  updateLocalStorageData("widgetData", allData);
}

// Функция для подсчета объема занимаемой памяти в LocalStorage
const calculateLocalStorageSize = () => {
  let totalSize = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += (key.length + localStorage[key].length) * 2; // учитываем размер ключа и значения
    }
  }
  return totalSize;
};

// Логика обновления и удаления данных в LocalStorage
const updateLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));

  // Получаем размер занимаемой памяти и максимальный размер хранилища
  let usedSize = calculateLocalStorageSize();
  let maxSize = 5 * 1024 * 1024; // Максимальный размер хранилища - 5 MB

  // Выводим информацию в консоль
  console.log(`Занято памяти: ${usedSize} байт из ${maxSize} байт`);

  // Если занимаемые данные больше максимального размера, то удалим первые элементы из localStorage
  if (usedSize > maxSize) {
    const dataArray = JSON.parse(localStorage.getItem("widgetData"));
    dataArray.splice(0, 100);
  }
};

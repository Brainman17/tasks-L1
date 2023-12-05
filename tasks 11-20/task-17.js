const map = document.querySelector("#map");

const init = () => {
  const inputSearch = new ymaps.control.SearchControl({
    options: {
      noPlacemark: true,
    },
  });

  const myMap = new ymaps.Map("map", {
    center: [53.297914, 60.097095],
    controls: [inputSearch],
    zoom: 15,
  });

  return myMap;
};

ymaps.ready(init);

// При таком коде выпадающий список появляется при нажатии на кнопку "Найти".
// Но во время ввода выдает ошибку 'Suggest is not available'.
// Я долго пытался разобраться в чем проблема, пришел к выводу, что она лежит на стороне Яндекса.
// Но если я ошибаюсь, дайте знать, пожалуйста.

// Создаем функцию-обертку для обработчика события изменения размера карты
function debounceAndThrottle(func, delay) {
  let timerId; // Идентификатор таймера

  // Возвращаем новую функцию, которая будет вызываться при событии изменения размера карты
  return function () {
    // Так как у нас есть и дебаунсинг и троттлинг, для каждой вызова функции устанавливаем таймер
    clearTimeout(timerId);

    // Если есть задержка, используем троттлинг
    if (delay) {
      // Установка нового таймера с задержкой
      timerId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    } else {
      // В противном случае, используем дебаунсинг
      // Установка нового таймера через определенное время
      timerId = setTimeout(() => {
        func.apply(this, arguments);
      }, 500);
    }
  };
}

// Подписываемся на событие изменения размера карты с использованием функции-обертки
map.addEventListener("resize", debounceAndThrottle(init, 500));

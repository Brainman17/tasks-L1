const animateElement = (element, property, startValue, endValue, duration) => {
  // Создаем переменную startTime, которая будет хранить время начала анимации
  let startTime = null;

  // Создаем функцию animate, которая будет вызываться рекурсивно
  // с помощью requestAnimationFrame для обновления значения свойства CSS
  const animate = (timestamp) => {
    // Считаем прогресс анимации и вычисляем текущее значение свойства CSS
    // на основе начального и конечного значения
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const newValue =
      startValue + (endValue - startValue) * (progress / duration);
    // Устанавливаем новое значение
    element.style[property] = `${newValue}px`;

    // Проверяем, достигли ли мы конечного значения.
    // Если нет, вызываем requestAnimationFrame для продолжения анимации.
    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
animateElement(prev, "width", 100, 300, 1000);
animateElement(next, "width", 100, 300, 1000);

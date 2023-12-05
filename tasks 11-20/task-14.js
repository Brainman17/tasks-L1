const loadImage = (url) => {
  // Возвращаем промис с двумя коллбэками resolve и reject
  return new Promise((resolve, reject) => {
    // В котором создаем новый объект Image, который будет использоваться для загрузки изображения
    const image = new Image();

    // Устанавливаем обработчик onload при упешной загрузке изображения и передаем resolve image
    image.onload = () => {
      resolve(image);
    };

    // Также отлавливаем ошибку с помощью onerror и выбрасываем new Error при reject
    image.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    // Загружаем изображение
    image.src = url;
  });
};

// loadImage("https://images.app.goo.gl/sZbikUPQKUki7JYB7")
//   .then((image) => console.log(image))
//   .catch((error) => console.error(error));

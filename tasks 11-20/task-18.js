let size = 0;
let key = "for test";

// Воспользуемся циклом while, который выполняет код, если условие равно true и прекращает, если false
try {
  while (true) {
    // Начнем с попытки сохранить 1 МБ данных в localStorage и будем повторять процесс, пока не упадет ошибка
    // и не будет сгенерировано исключение QuotaExceededError (закомичу, чтобы не засорять LS)
    // let data = "a".repeat(1024 * 1024); // 1024 * 1024 = 1MB

    // localStorage.setItem принимает ключевое слово и данные, которые к нему относятся
    localStorage.setItem(key, data);
    size++;
    key += "a";
  }
} catch (error) {
  //   console.log("Максимальный объем данных в localStorage:", size, "MB");
  ("Максимальный объем данных в localStorage: 4 MB");
}

// localStorage.clear();

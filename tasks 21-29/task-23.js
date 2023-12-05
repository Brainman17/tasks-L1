// Будем оценивать сложность пароля на основе его длины,
// использования различных символов, наличия чисел и букв в разных регистрах

const passwordStrength = (password) => {
  let score = 0;

  // Увеличение счета на основе длины пароля
  if (password.length >= 8) {
    score += 2;
  } else if (password.length >= 5) {
    score += 1;
  }

  // Увеличение счета на основе регулярных выражений
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexNumber = /[0-9]/;
  const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;

  if (regexLower.test(password)) {
    score += 1;
  }

  if (regexUpper.test(password)) {
    score += 1;
  }

  if (regexNumber.test(password)) {
    score += 1;
  }

  if (regexSpecial.test(password)) {
    score += 1;
  }

  // Оценка сложности пароля и предложение улучшений
  if (score === 0) {
    return prompt("Введите пароль:");
  } else if (score === 1) {
    return "Слабый пароль. Постарайтесь добавить числа, различные символы или увеличьте длину пароля.";
  } else if (score === 2) {
    return "Средний пароль";
  } else if (score === 3) {
    return "Сильный пароль";
  } else {
    return "Очень сильный пароль";
  }
};

// Попросим пользователя ввести пароль через prompt и показать ошибку через alert

// const password = prompt("Введите пароль:");
// const strength = passwordStrength(password);
// alert(strength);

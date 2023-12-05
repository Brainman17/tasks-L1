// Мое рассуждение на тему document.write() я бы хотел начать с того, что данная функция корректно отображает
// данные на странице только, если она вызывается прямо в index.html в тегах srcipt. Но и в этом случае
// браузер будет выдавать предупреждение Avoid using document.write(), которое говорит,
// что лучше избегать использования document.write(), поскольку существуют более современные и
// рекомендуемые способы вывода данных: innerHTML, insertAdjacenthtml или template.

// Если же я захочу использовать эту функцию, например, в начале index.js
// перед всеми остальными файлами, то будет вылетать ошибка: Невозможно выполнить запись в документ
// из асинхронно загруженного внешнего сценария, так как пытаюсь использовать функцию
// в асинхронно загружаемом внешнем скрипте.

// Поэтому правильнее будет вызвать document.write() внутри document.write() явно в index.html.
// Однако, в этом случае мы будем видеть текст толбко самого вложенного вызова функции,
// другие же нам будут выдавать undefined;

// Таким образом, можно сделать вывод, что нельзя вызвать функцию document.write() внутри document.write(),
// поскольку это может привести к неожиданным результатам и ошибкам, так как
// первый вызов будет заменен на второй, что может привести к потере данных и ошибкам в работе скрипта.
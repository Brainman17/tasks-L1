const externalFunction = (parameter) => {
  return () => {
    // console.log(parameter);
  };
};

const callFunction = externalFunction("Привет, сосед!");
callFunction(); // Внутренняя функция имеет доступ к параметру

import sleep from "sleep-promise";

export const getAllData = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );

export const getAllDataWithDelay = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then(sleep(10000));

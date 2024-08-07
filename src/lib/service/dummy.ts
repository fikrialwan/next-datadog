import sleep from "sleep-promise";

export const getAllData = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );

export const getAllDataWithDelay = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then(sleep(100000));

export const postData = () =>
  fetch("https://jsonplaceholde.typicode.com/todos", {
    method: "POST",
  }).then((response) => response.json());

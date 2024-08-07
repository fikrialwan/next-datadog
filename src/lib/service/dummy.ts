import { datadogLogs } from "@datadog/browser-logs";
import { error } from "console";
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

export const postDataWithLog = () =>
  fetch("https://jsonplaceholde.typicode.com/todos", {
    method: "POST",
  })
    .then((response) => response.json())
    .catch((error) =>
      datadogLogs.logger.error(
        "Error Fetching",
        {
          url: "https://jsonplaceholde.typicode.com/todos",
          method: "POST",
          message: error.message,
        },
        error
      )
    );

export const getById = (id: string) =>
  fetch("https://jsonplaceholder.typicode.com/todos/" + id).then((response) =>
    response.json()
  );

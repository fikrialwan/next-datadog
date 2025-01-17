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
    .then(sleep(10000));

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

export const submitErrorDataWithLog = (title: string) =>
  fetch("https://jsonplaceholde.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
  })
    .then((response) => response.json())
    .catch((error) =>
      datadogLogs.logger.error(
        "Error Fetching" +
          JSON.stringify({
            url: "https://jsonplaceholde.typicode.com/todos",
            method: "POST",
            message: error.message,
            body: {
              title,
            },
          }),
        {
          url: "https://jsonplaceholde.typicode.com/todos",
          method: "POST",
          message: error.message,
          body: {
            title,
          },
        },
        error
      )
    );

export const getById = (id: string) =>
  fetch("https://jsonplaceholder.typicode.com/todos/" + id).then((response) =>
    response.json()
  );

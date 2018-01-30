import * as types from "./actionTypes";

const generateID = () =>
  "_" +
  Math.random()
    .toString(36)
    .substr(2, 9);

export function addTask(task) {
  task.id = generateID();
  return { type: types.ADD_TASK, task };
}

export function deleteTask(taskID) {
  return { type: types.DELETE_TASK, taskID };
}

export function editTask(task) {
  return { type: types.EDIT_TASK, task };
}

export function getTasks() {
  return { type: types.GET_TASKS, payload: null };
}

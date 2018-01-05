import * as types from './actionTypes';

const generateID = () =>
  '_' +
  Math.random()
    .toString(36)
    .substr(2, 9);

export function addTask(task) {
  task.id = generateID();
  return { type: types.ADD_TASK, task };
}

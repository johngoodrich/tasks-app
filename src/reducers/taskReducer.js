import * as types from "../actions/actionTypes";

function taskReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          id: action.task.id,
          title: action.task.title,
          owner: action.task.owner,
          status: "Not Done"
        }
      ];

    case types.DELETE_TASK:
      let index = state.findIndex(x => x.id.toString() === action.taskID);
      let newState = removeItemByIndex(state, index);
      return [...newState];

    default:
      return state;
  }
}
//Cuts out item from an array by index
const removeItemByIndex = (items, index) => {
  return [...items.slice(0, index), ...items.slice(index + 1, items.length)];
};

export default taskReducer;

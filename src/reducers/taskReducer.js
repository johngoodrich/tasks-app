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

    case types.EDIT_TASK:
      let indexEdit = state.findIndex(x => x.id.toString() === action.task.id);
      editItemByIndex(state, indexEdit, action);
      return [...state];

    case types.DELETE_TASK:
      let index = state.findIndex(x => x.id.toString() === action.taskID);
      state = removeItemByIndex(state, index);
      return [...state];

    default:
      return state;
  }
}
//Cuts out item from an array by index
const removeItemByIndex = (items, index) => {
  return [...items.slice(0, index), ...items.slice(index + 1, items.length)];
};

//Edit item from an array by index
const editItemByIndex = (items, index, action) => {
  items.splice(index, 1, action.task);
};

export default taskReducer;

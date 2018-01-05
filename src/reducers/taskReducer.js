import * as types from '../actions/actionTypes';

function taskReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          id: action.task.id,
          title: action.task.title,
          owner: action.task.owner,
          status: 'Not Done'
        }
      ];

    default:
      return state;
  }
}

export default taskReducer;

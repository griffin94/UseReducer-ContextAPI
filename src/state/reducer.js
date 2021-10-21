import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from './todo/actionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== payload)],
      };

    case CHANGE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === payload.id ? payload : task,
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;

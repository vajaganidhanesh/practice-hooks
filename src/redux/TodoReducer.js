const initiState = {
  todos: [],
};

export const TodoList = (state = initiState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action);
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((value) => value.id !== action.payload),
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: [state.todos.splice],
      };

    default:
      return state;
  }
};

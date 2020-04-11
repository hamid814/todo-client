export default (state, action) => {
  switch (action.type) {
    case 'get-todos':
      return {
        ...state,
        todos: action.payload,
      };
    case 'add-todo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'update-todo':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            return action.payload;
          } else {
            return todo;
          }
        }),
      };
    case 'delete-todo':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case 'clear-data':
      return {
        ...state,
        todos: [],
      };
    case 'set-current':
      return {
        ...state,
        current: action.payload,
      };
    case 'clear-current':
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

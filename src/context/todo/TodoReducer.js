export default (state, action) => {
  switch (action.type) {
    case 'get-todos':
      return {
        ...state,
        todos: action.payload,
      };
    case 'delete-todo':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    default:
      return state;
  }
};

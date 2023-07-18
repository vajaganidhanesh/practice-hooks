export const handleAddTodoList = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

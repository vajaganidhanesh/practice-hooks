export const AddTodoList = (data) => {
  // console.log(data);
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

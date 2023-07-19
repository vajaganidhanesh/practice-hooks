export const AddTodoList = (data) => {
  // console.log(data);
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

export const DeleteTodoList = (data) => {
  return {
    type: "DELETE_TODO",
    payload: data,
  };
};

export const FetchProducts = () => {
  return {
    type: "Fetch_Data",
  };
};

const initiState = {
  counter: 0,
  todos: [],
};

export const addCart = (state = initiState, action) => {
  switch (action.type) {
    case "add":
      console.log(action.payload);
      return 100;

    default:
      return 100;
  }
};

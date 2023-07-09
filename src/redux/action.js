export const addToCart = (data) => {
  console.log(data);
  return {
    type: "add",
    payload: data,
  };
};

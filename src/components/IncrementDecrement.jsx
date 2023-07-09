import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";

function IncrementDecrement() {
  const dispatch = useDispatch();
  return (
    <div>
      IncrementDecrement
      <button
        onClick={() => {
          dispatch(addToCart(200));
        }}
      >
        Click
      </button>
    </div>
  );
}

export default IncrementDecrement;

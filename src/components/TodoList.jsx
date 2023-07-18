import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoList } from "../redux/action";

function TodoList() {
  const store = useSelector((state) => state);
  console.log(store);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    todo: "",
  });

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAddData = (data) => {
    if (data.id & (data.todo !== "")) {
      dispatch(AddTodoList(data));
    } else {
      console.log("please fill the list");
    }
  };

  return (
    <div className="container">
      <dl>
        <dt>id</dt>
        <dd>
          <input
            type="text"
            name=""
            id="id"
            onChange={handleChange}
            value={todo.id}
          />
        </dd>
        <dt>Enter the todo list</dt>
        <dd>
          <input
            type="text"
            name=""
            id="todo"
            onChange={handleChange}
            value={todo.todo}
          />
        </dd>
        <dd>
          <button
            onClick={() => {
              handleAddData(todo);
            }}
          >
            AddtoList
          </button>
        </dd>
      </dl>
    </div>
  );
}

export default TodoList;

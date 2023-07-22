import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoList, DeleteTodoList } from "../redux/TodoList/TodoActions";
import { handleFakeStoreData } from "../redux/Fakestore/FakeStoreActions";

function TodoList() {
  const store = useSelector((state) => state.TodoList.todos);
  const products = useSelector((state) => state.FakeStore.products);
  console.log(products);
  const dispatch = useDispatch();

  const [todos, setTodo] = useState({
    id: 0,
    todo: "",
  });
  const { id, todo } = todos;

  useEffect(() => {
    console.log("fetched data");
    dispatch(handleFakeStoreData());
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAddData = (data) => {
    if (todo !== "" && id !== 0) {
      dispatch(AddTodoList(data));
      setTodo({ id: 0, todo: "" });
    } else {
      console.log("please fill the list");
    }
  };

  const handleDelete = (data) => {
    dispatch(DeleteTodoList(data));
  };

  return (
    <div className="container">
      <div className=" row-cols-3">
        <div>
          <dl>
            <dt>Id</dt>
            <dd>
              <input
                type="text"
                className="form-control"
                name=""
                id="id"
                value={id}
                onChange={handleChange}
              />
            </dd>
            <dt>Enter the todo list</dt>
            <dd>
              <input
                type="text"
                className="form-control "
                name=""
                id="todo"
                value={todo}
                onChange={handleChange}
              />
            </dd>
            <dd>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  handleAddData(todos);
                }}
              >
                AddtoList
              </button>
            </dd>
          </dl>
        </div>
      </div>
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(FetchProducts());
        }}
      >
        FetchData
      </button> */}
      {store.length !== 0 ? (
        <>
          {store.map((value, index) => {
            return (
              <div key={index} className=" mt-3">
                <span>
                  {index + 1} - {value.todo}
                </span>
                <span>
                  <button
                    className=" ms-2 btn btn-danger"
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                  >
                    delete todo
                  </button>
                </span>
              </div>
            );
          })}
        </>
      ) : (
        <>Please fill the list</>
      )}

      <div className=" d-flex flex-wrap">
        {products?.map((value, index) => {
          return (
            <div
              key={index + 1}
              className=" card"
              style={{ width: "25%", height: "300px" }}
            >
              <div className=" card-img">
                <img className=" img-fluid" src={value.image} alt="" />
              </div>
              <div className=" card-body text-truncate">{value.title}</div>
              <div className="btn btn-danger">Delete</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;

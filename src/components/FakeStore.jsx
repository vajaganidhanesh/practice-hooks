import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFakeStoreData,
  handleDeleteFakeStoreData,
} from "../redux/Fakestore/FakeStoreActions";

import MyModal from "./MyModal";

function FakeStore() {
  const products = useSelector((state) => state.FakeStore.products);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    image: "",
  });
  const [model, setModel] = useState(false);

  useEffect(() => {
    console.log("fetched data");
    dispatch(handleFakeStoreData());
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    dispatch(handleDeleteFakeStoreData(id));
  };

  const handleModel = () => {
    if (model === false) {
      setModel(true);
    } else {
      setModel(false);
    }
  };

  return (
    <>
      <div className=" container-fluid">
        <div>
          <MyModal props={handleModel} props1={model} />
        </div>
        <div className=" d-flex m-3 flex-wrap column-gap-2 row-gap-2 col-3">
          <input type="text" className="form-control" />
          <input type="text" className="form-control" />
          <input type="text" className="form-control" />
          <button className=" btn btn-primary">Add Product</button>
        </div>

        <div className=" d-flex flex-wrap justify-content-center column-gap-2 row-gap-2">
          {products?.map((value, index) => {
            return (
              <div
                key={index + 1}
                className=" card"
                style={{ width: "24%", minHeight: "300px" }}
              >
                <div className=" card-img d-flex justify-content-center align-items-center">
                  <img
                    className=" img-fluid"
                    style={{ width: "75%" }}
                    src={value.image}
                    alt=""
                  />
                </div>
                <div className=" card-body ">{value.title}</div>
                <div className=" d-flex justify-content-around m-3">
                  <div
                    className="btn btn-primary"
                    onClick={() => {
                      handleModel();
                    }}
                  >
                    Update
                  </div>
                  <div
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                  >
                    Delete
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FakeStore;

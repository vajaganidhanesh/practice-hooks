// import React, { useState } from "react";

function MyModal({ props, props1 }) {
  return (
    <div>
      {/* Modal */}
      {props1 && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    props();
                  }}
                />
              </div>
              <div className="modal-body">
                {/* Your modal content goes here */}
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control mb-1"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control mb-1"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control mb-1"
                />
                <p>Modal content goes here...</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    props();
                  }}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for the modal */}
      {props1 && (
        <div
          className="modal-backdrop fade show"
          onClick={() => {
            props();
          }}
        />
      )}
    </div>
  );
}

export default MyModal;

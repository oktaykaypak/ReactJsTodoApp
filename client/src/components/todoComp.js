import "../assets/App.css";
import React, { Component } from "react";

function todoComp() {
  return (
    <div className="row">
      <div className="col-12 p-3 card bg-dark text-light">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>

          <div className="btn-group">
            <button className="btn btn-success">
              <i className="bi bi-pen"></i> Düzenle
            </button>
            <button className="btn btn-light">
              <i className="bi bi-trash"></i> Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default todoComp;

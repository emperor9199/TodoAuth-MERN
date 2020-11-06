import React, { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import todoapi from "../api/todoapi";

const Dashboard = () => {
  const tname = useRef();
  const { id } = useParams();
  const history = useHistory();

  const editTask = async () => {
    await todoapi.put(`/edit/${id}`, { taskname: tname.current.value });
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask();
  };

  return (
    <div className="container m-5 text-center">
      <form onSubmit={handleSubmit}>
        <label className="mr-5" htmlFor="taskname">
          Taskname:
        </label>
        <input type="text" name="taskname" id="taskname" ref={tname} required />
        <button className="btn btn-success ml-5" type="submit">
          EDIT
        </button>
      </form>
    </div>
  );
};

export default Dashboard;

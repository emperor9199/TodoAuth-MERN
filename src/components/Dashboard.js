import React, { useState, useEffect, useRef } from "react";
import Todos from "./Todos";
import todoapi from "../api/todoapi";

const Dashboard = () => {
  const tname = useRef();
  const [tasks, setTasks] = useState([]);

  const fetchTodo = async () => {
    const todo = await todoapi.get("/");
    setTasks(todo.data);
  };

  const addTask = async () => {
    await todoapi.post("/add", { taskname: tname.current.value });
  };

  useEffect(() => {
    fetchTodo();
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  const removeTask = async (id) => {
    await todoapi.delete(`/delete/${id}`);
  };

  return (
    <div className="container m-5 text-center">
      <form onSubmit={handleSubmit}>
        <label className="mr-5" htmlFor="taskname">
          Taskname:
        </label>
        <input type="text" name="taskname" id="taskname" ref={tname} required />
        <button className="btn btn-success ml-5" type="submit">
          ADD
        </button>
      </form>
      <hr />
      <Todos tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Dashboard;

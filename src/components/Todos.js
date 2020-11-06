import React from "react";
import { Link } from "react-router-dom";

const Todos = ({ tasks, removeTask }) => {
  return (
    <table className="table">
      <thead className="bg-warning">
        <tr>
          <th>Taskname</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      {tasks.map((task) => {
        return (
          <tbody key={task._id}>
            <tr>
              <td>{task.taskname}</td>
              <td>
                <Link className="btn btn-primary" to={`editTask/${task._id}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTask(task._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Todos;

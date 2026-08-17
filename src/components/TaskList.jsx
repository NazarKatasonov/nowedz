import React from "react";
import "./TaskList.css";

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "піти" },
    { id: 2, text: "покушать" },
    { id: 3, text: "👍" }
  ];

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter(
      (task) => task.id !== id
    );

    this.forceUpdate();
  };

  render() {
    return (
      <div className="task-list">
        <h1>завдання: </h1>

        {TaskList.tasks.map((task) => (
          <div className="task" key={task.id}>
            <span>{task.text}</span>

            <button onClick={() => this.deleteTask(task.id)}>
              de;ete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
import { Trash2 } from "lucide-react";
import { TasksContext } from "../../context/TasksContext";
import styles from "./styles.module.scss";
import React, { FormEvent, useContext, useState } from "react";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, setTasks } = useContext(TasksContext);

  function handleSubmitAddTask(e: FormEvent) {
    e.preventDefault();

    const newTask = [
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">New Task</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            id="task-title"
            placeholder="Enter a new task"
          />
        </div>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <input
                onChange={() => handleToggleTaskStatus(task.id)}
                type="checkbox"
                name="task"
                id={`${task.id}`}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`${task.id}`}
              >
                {task.title}
              </label>
            </div>
            <button
              onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

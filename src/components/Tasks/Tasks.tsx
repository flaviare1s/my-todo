import styles from "./styles.module.scss";
import React, { FormEvent, useEffect, useState } from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

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
    localStorage.setItem('tasks', JSON.stringify(newTask));
    setTaskTitle("");
  }

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');

    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, [])

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
            <input type="checkbox" name="task" id={`${task.id}`} />
            <label htmlFor={`${task.id}`}>{task.title}</label>
          </li>
        ))}
      </ul>
    </section>
  );
};

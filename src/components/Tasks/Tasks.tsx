import styles from "./styles.module.scss";
import React, { FormEvent, useState } from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const Tasks: React.FC<TasksProps> = ({ tasks, setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmitAddTask(e: FormEvent) {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newTask = [
      ...tasks,
      { id: Date.now(), title: taskTitle, done: false },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
    setTaskTitle("");
  }

  function toggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function deleteTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
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
                type="checkbox"
                id={`${task.id}`}
                checked={task.done}
                onChange={() => toggleTaskDone(task.id)}
              />
              <label
                htmlFor={`${task.id}`}
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.title}
              </label>
            </div>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

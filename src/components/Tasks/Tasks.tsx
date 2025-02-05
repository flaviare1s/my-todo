import styles from "./styles.module.scss";
import React from "react";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = React.useState("");

  return (
    <section className={styles.container}>
      <form>
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
    </section>
  );
};

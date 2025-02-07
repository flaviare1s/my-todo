import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import React from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface HeaderProps {
  tasks: Task[];
}

export const Header: React.FC<HeaderProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Welcome!</span>
        </div>
        <div>
          <StatsCard title="Total" value={totalTasks} />
          <StatsCard title="Pending" value={pendingTasks} />
          <StatsCard title="Completed" value={completedTasks} />
        </div>
      </div>
    </header>
  );
};

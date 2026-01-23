import { ListChecks } from "lucide-react";
import { TasksContext } from "../../context/TasksContext";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import React, { useContext } from "react";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;

  const totalPending = tasks.reduce((total, task) => {
    if(!task.done) return total + 1;
    return total
  }, 0)

  const totalCompleted = totalTasks - totalPending

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <ListChecks />
          <h1>MyTodo</h1>
        </div>
        <div>
          <StatsCard title="Total" value={totalTasks} />
          <StatsCard title="Pending" value={totalPending} />
          <StatsCard title="Completed" value={totalCompleted} />
        </div>
      </div>
    </header>
  );
};

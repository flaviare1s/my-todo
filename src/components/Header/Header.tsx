import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Welcome, user!</span>
        </div>
        <div>
          <StatsCard title="Total" value={5} />
          <StatsCard title="Pending" value={2} />
          <StatsCard title="Completed" value={3} />
        </div>
      </div>
    </header>
  );
};

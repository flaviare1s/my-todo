import { StatsCard } from "../StatsCard/StatsCard"
import styles  from "./styles.module.scss"
import React from "react"

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Welcome, user!</span>
        </div>
        <div>
          <StatsCard title="Total Tasks" value={5} />
          <StatsCard title="Pending Tasks" value={2} />
          <StatsCard title="Completed Tasks" value={3} />
        </div>
      </div>
    </header>
  );
}

import "./styles/global.css";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { useState, useEffect } from "react";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  return (
    <>
      <Header tasks={tasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;

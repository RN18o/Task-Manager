import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Addtask from "./components/addtask/addtask";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Completed from "./components/Completed/Completed";
import Important from "./components/Important/Important";
import InProgress from "./components/InProgress/InProgress";
import data from "./assets/data";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      setTask(
        data.filter(
          (task) =>
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setTask(data);
    }
  }, [search]);

  const handleTaskCreate = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Addtask onTaskCreate={handleTaskCreate} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/inprogress" element={<InProgress />} />
        <Route path="/important" element={<Important />} />
      </Routes>
    </>
  );
};

export default App;

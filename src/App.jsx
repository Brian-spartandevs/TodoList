import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

export const App = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      alert("Debes agregar algo");
      return;
    }
    const newTarea = {
      id: Date.now(),
      tarea,
      completed: false,
    };

    const totalTareas = [newTarea, ...tareas];
    setTareas(totalTareas);
    setTarea("");
  };

  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => {
      return tarea.id != id;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <h2>TodoList</h2>

      <Form handleChange={handleChange} addTask={addTask} tarea={tarea} />

      {tareas.map((tarea) => (
        <Task
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea}
        />
      ))}
    </>
  );
};

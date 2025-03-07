import React, { useState } from "react";
import TodoList from "./TodoList";

const Home = () => {
  const [lista, setLista] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "*") { 
      alert("No se puede agregar asteriscos");
      e.preventDefault();
    }
  };

  const addTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setLista(prevLista => [
        ...prevLista,
        { 
          id: Date.now(), 
          texto: nuevaTarea, 
          completada: false, 
          importante: false, 
          activa: false
        }
      ]);
      setNuevaTarea('');
    }
  };

  const toggleCompletada = (id) => {
    setLista(prevLista => 
      prevLista.map(tarea => 
        tarea.id === id ? { ...tarea, completada: !tarea.completada, importante: false, activa: false } : tarea
      )
    );
  };

  const toggleImportante = (id) => {
    setLista(prevLista => 
      prevLista.map(tarea => 
        tarea.id === id && !tarea.completada ? { ...tarea, importante: !tarea.importante } : tarea
      )
    );
  };

  const toggleActiva = (id) => {
    setLista(prevLista => {
      return prevLista.map(tarea => 
        tarea.id === id && !tarea.completada ? { ...tarea, activa: !tarea.activa } : tarea
      ).sort((a, b) => b.activa - a.activa); // La activa siempre primera
    });
  };

  const removeTarea = (id) => {
    setLista(prevLista => prevLista.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="title-container">TAREAS</div>
      <div className="todo-box">
        <form onSubmit={addTarea}>
          <input 
            type="text" 
            className="todo-input"
            value={nuevaTarea} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
            placeholder="Escribe aquí tu tarea:"
          />
        </form>
        <TodoList 
          lista={lista} 
          removeTarea={removeTarea} 
          toggleCompletada={toggleCompletada} 
          toggleImportante={toggleImportante}
          toggleActiva={toggleActiva}
        />
        <footer className="footer">{lista.length} Tareas Pendientes </footer>
      </div>
    </div>
  );
};

export default Home;

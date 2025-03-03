import React, { useState } from "react";
import TodoList from "./TodoList";

const Home = () => {
  const [lista, setLista] = useState([]); // Lista de tareas
  const [nuevaTarea, setNuevaTarea] = useState(''); // Input de la tarea

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
      setLista([...lista, { id: Date.now(), texto: nuevaTarea }]);
      setNuevaTarea('');
    }
  };

  const removeTarea = (id) => {
    setLista(lista.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="title">TAREAS</h1>
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
        <TodoList lista={lista} removeTarea={removeTarea} />
        <footer className="footer">{lista.length} Tareas Pendientes </footer>
      </div>
    </div>
  );
};

export default Home;

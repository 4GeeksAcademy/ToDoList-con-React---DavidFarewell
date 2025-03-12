import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";


const Home = () => {

  const API_URL = "https://playground.4geeks.com/todo";
  const USERNAME = "davidfarewell"; // Nombre de usuario en la API 

  const [lista, setLista] = useState([]); // Lista de tareas
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Obtener las tareas del usuario
  const getTasks = () => {
    fetch(`${API_URL}/users/${USERNAME}`)
      .then(response => response.json())
      .then(data => {
        console.log("Tareas obtenidas:", data.todos);
        setLista(data.todos);
      })
      .catch(error => console.log("Error al obtener tareas:", error));
  };

  // Crear un usuario si no existe
  const createUser = () => {
    fetch(`${API_URL}/users/${USERNAME}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => console.log("Usuario creado:", data))
      .catch(error => console.log("Error al crear usuario:", error));
  };

  // Agregar una tarea nueva
  
  const addTarea = (e) => {    // set loading = true (Para que no haya el problema de escribir demasiado rapido)
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;

    fetch(`${API_URL}/todos/${USERNAME}`, {
      method: "POST",
      body: JSON.stringify({ label: nuevaTarea, is_done: false }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then((data) => { // Set loading =false (Para que no haya el problema de escribir demasiado rapido)
        setNuevaTarea(""); // Limpiar input
       //getTasks(); // Actualiza la lista
        setLista([...lista,data]);
      })
      .catch(error => console.log("Error al agregar tarea:", error));
  };

  // Actualizar estado de tarea 
  const updateTarea = (id, updatedTask) => {
    fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTask),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(() => getTasks())
      .catch(error => console.log("Error al actualizar tarea:", error));
  };

  // Eliminar una tarea
  const removeTarea = (id) => {
    fetch(`${API_URL}/todos/${id}`, { method: "DELETE" })
      .then(() => getTasks())
      .catch(error => console.log("Error al eliminar tarea:", error));
  };

  // Crear el usuario y obtener las tareas al cargar la página
  useEffect(() => {
    createUser();
    getTasks();
  }, []);

  return (
    <div className="todo-container">
      <div className="title-container">TAREAS</div>
      <div className="todo-box">
        <form onSubmit={addTarea}>
          <input 
            type="text" 
            className="todo-input"
            value={nuevaTarea} 
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Escribe aquí tu nueva tarea"
            //disabled
          />
        </form>
        <TodoList 
          lista={lista} 
          removeTarea={removeTarea} 
          updateTarea={updateTarea} 
        />
        <footer className="footer">{lista.length} Tareas Pendientes</footer>
      </div>
    </div>
  );
};

export default Home;

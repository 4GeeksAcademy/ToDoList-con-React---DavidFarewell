import React from 'react';
import Tarea from './Tarea'; 

const TodoList = ({ lista, removeTarea, updateTarea }) => {
  return (
    <ul className="todo-list">
      {lista.length > 0 ? (
        lista.map(tarea => (
          <Tarea 
            key={tarea.id} 
            tarea={tarea} 
            removeTarea={removeTarea} 
            updateTarea={updateTarea} 
          />
        ))
      ) : (
        <p className="empty">- No hay tareas -</p>
      )}
    </ul>
  );
};

export default TodoList;

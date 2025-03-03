import React from 'react';
import Tarea from './Tarea'; 

const TodoList = ({ lista, removeTarea }) => {
  return (
    <ul className="todo-list">
      {lista.length > 0 ? (
        lista.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} removeTarea={removeTarea} />
        ))
      ) : (
        <p className="empty">-Tus tareas aparecerán aquí-</p>
      )}
    </ul>
  );
};

export default TodoList;

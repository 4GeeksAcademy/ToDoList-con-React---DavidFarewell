import React from 'react';

const Tarea = ({ tarea, removeTarea }) => { 
  return (
    <li className="todo-item"> 
      {tarea.texto} 
      <button className="delete-btn" onClick={() => removeTarea(tarea.id)}>✖</button> 
    </li>
  );
};

export default Tarea; 

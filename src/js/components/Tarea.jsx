import React from 'react';

const Tarea = ({ tarea, removeTarea, updateTarea }) => { 
  return (
    <li className={`todo-item ${tarea.is_done ? "completada" : ""}`}> 
      {/* Checkbox para marcar completado */}
      <input 
        type="checkbox" 
        className="checkbox"
        checked={tarea.is_done}
        onChange={() => updateTarea(tarea.id, { ...tarea, is_done: !tarea.is_done })}
      />

      {/* Texto de la tarea */}
      <span className="texto-tarea" title={tarea.label}>{tarea.label}</span>

      {/* Botón de eliminar */}
      <button className="delete-btn" onClick={() => removeTarea(tarea.id)}>✖</button> 
    </li>
  );
};

export default Tarea;

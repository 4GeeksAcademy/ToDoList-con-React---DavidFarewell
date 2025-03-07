import React from 'react';

const Tarea = ({ tarea, removeTarea, toggleCompletada, toggleImportante, toggleActiva }) => { 
  return (
    <li className={`todo-item 
      ${tarea.completada ? "completada" : ""} 
      ${tarea.importante ? "importante" : ""} 
      ${tarea.activa ? "activa" : ""}`
    }> 
      {/* Checkbox */}
      <input 
        type="checkbox" 
        className="checkbox"
        checked={tarea.completada}
        onChange={() => toggleCompletada(tarea.id)}
      />

      {/* Texto de la tarea */}
      <span className="texto-tarea" title={tarea.texto}>{tarea.texto}</span>

      {/* Contenedor de iconos alineados */}
      <div className="icon-container">
        <button className="important-btn" 
          onClick={() => toggleImportante(tarea.id)} 
          disabled={tarea.completada}> ！
        </button> 

        <button className="active-btn" 
          onClick={() => toggleActiva(tarea.id)} 
          disabled={tarea.completada}> ▶
        </button> 

        <button className="delete-btn" onClick={() => removeTarea(tarea.id)}>✖</button> 
      </div>
    </li>
  );
};

export default Tarea;

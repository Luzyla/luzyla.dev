import React from "react";

export function ButtonButton({ dataName, className, id, txtButton, onClick }) {
  return (
    <button
      data-name={dataName}
      className={className}
      id={id}
      onClick={onClick}
    >
      {txtButton}
    </button>
  );
}

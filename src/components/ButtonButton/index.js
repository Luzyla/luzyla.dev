import React from "react";

export function ButtonButton({ dataName, className, id, txtButton }) {
  return (
    <button data-name={dataName} className={className} id={id}>
      {txtButton}
    </button>
  );
}

import React from "react";
import { ButtonButton } from "../ButtonButton";

export function SorterBar({ onSort }) {
  return (
    <div className="botonera-proyectos">
      <ButtonButton
        data-name="todos"
        className="menu-proyectos buttonClicked"
        id="boton-todos"
        txtButton="TODOS"
        onClick={() => onSort("all")}
      ></ButtonButton>

      <ButtonButton
        data-name="html"
        className="menu-proyectos"
        txtButton="HTML/CSS"
        onClick={() => onSort("html")}
      ></ButtonButton>

      <ButtonButton
        data-name="js"
        className="menu-proyectos"
        txtButton="JavaScript"
        onClick={() => onSort("js")}
      ></ButtonButton>

      <ButtonButton
        data-name="react"
        className="menu-proyectos"
        txtButton="React"
        onClick={() => onSort("react")}
      ></ButtonButton>
    </div>
  );
}

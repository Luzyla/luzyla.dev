import React from "react";
import { ButtonButton } from "../ButtonButton";

export function SorterBar() {
  return (
    <div className="botonera-proyectos">
      <ButtonButton
        data-name="todos"
        className="menu-proyectos buttonClicked"
        id="boton-todos"
        txtButton="TODOS"
      ></ButtonButton>

      <ButtonButton
        data-name="html"
        className="menu-proyectos"
        txtButton="HTML/CSS"
      ></ButtonButton>

      <ButtonButton
        data-name="js"
        className="menu-proyectos"
        txtButton="JavaScript"
      ></ButtonButton>

      <ButtonButton
        data-name="react"
        className="menu-proyectos"
        txtButton="React"
      ></ButtonButton>
    </div>
  );
}

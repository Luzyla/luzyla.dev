import React from "react";
import { Button } from "../Button";

export function NavMenu({id}) {
    return <ul id={id}>
    <Button
      url="#a-hola"
      className="menu-header"
      txtButton="HOLA"
    ></Button>
    <Button
      url="#a-skills"
      className="menu-header"
      txtButton="CONOCIMIENTOS"
    ></Button>
    <Button
      url="#a-proyectos"
      className="menu-header"
      txtButton="PROYECTOS"
    ></Button>
    <Button
      url="#a-contacto"
      className="menu-header button"
      txtButton="CONTACTO"
    ></Button>
  </ul>
}
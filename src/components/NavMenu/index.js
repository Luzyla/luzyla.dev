import React from "react";
import { ButtonLink } from "../ButtonLink";

export function NavMenu({ id }) {
  return (
    <ul id={id}>
      <ButtonLink
        url="#a-hola"
        className="menu-header"
        txtButton="HOLA"
      ></ButtonLink>
      <ButtonLink
        url="#a-skills"
        className="menu-header"
        txtButton="CONOCIMIENTOS"
      ></ButtonLink>
      <ButtonLink
        url="#a-proyectos"
        className="menu-header"
        txtButton="PROYECTOS"
      ></ButtonLink>
      <ButtonLink
        url="#a-contacto"
        className="menu-header button"
        txtButton="CONTACTO"
      ></ButtonLink>
    </ul>
  );
}

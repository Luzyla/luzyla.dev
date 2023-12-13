import React from "react";
import { ButtonLink } from "../ButtonLink";

export function NavMenu({ id, classNameBtn }) {
  return (
    <ul id={id}>
      <ButtonLink
        url="#a-hola"
        className={classNameBtn}
        txtButton="HOLA"
      ></ButtonLink>
      <ButtonLink
        url="#a-skills"
        className={classNameBtn}
        txtButton="CONOCIMIENTOS"
      ></ButtonLink>
      <ButtonLink
        url="#a-proyectos"
        className={classNameBtn}
        txtButton="PROYECTOS"
      ></ButtonLink>
      <ButtonLink
        url="#a-contacto"
        className={`${classNameBtn} button`}
        txtButton="CONTACTO"
      ></ButtonLink>
    </ul>
  );
}

import React from "react";
import { ButtonLink } from "../ButtonLink";

export function NavMenu({ id, classNameBtn, classNameList }) {
  return (
    <ul id={id} className={`list-style ${classNameList}`}>
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
        url="#a-quote"
        className={classNameBtn}
        txtButton="QUOTE"
      ></ButtonLink>
      <ButtonLink
        url="#a-proyectos"
        className={classNameBtn}
        txtButton="PORTFOLIO"
      ></ButtonLink>
      <ButtonLink
        url="#a-contacto"
        className={`${classNameBtn} button`}
        txtButton="CONTACTO"
      ></ButtonLink>
    </ul>
  );
}

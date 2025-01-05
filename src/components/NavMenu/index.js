import React from "react";
import { ButtonLink } from "../ButtonLink";

export function NavMenu({ id, classNameBtn, classNameList, handleToggleMenu }) {
  return (
    <ul id={id} className={`list-style ${classNameList}`}>
      <ButtonLink
        url="#a-hola"
        className={classNameBtn}
        txtButton="HOLA"
        onClick={handleToggleMenu}
      ></ButtonLink>
      <ButtonLink
        url="#a-skills"
        className={classNameBtn}
        txtButton="CONOCIMIENTOS"
        onClick={handleToggleMenu}
      ></ButtonLink>
      <ButtonLink
        url="#a-quote"
        className={classNameBtn}
        txtButton="QUOTE"
        onClick={handleToggleMenu}
      ></ButtonLink>
      <ButtonLink
        url="#a-proyectos"
        className={classNameBtn}
        txtButton="PORTFOLIO"
        onClick={handleToggleMenu}
      ></ButtonLink>
      <ButtonLink
        url="#a-contacto"
        className={`${classNameBtn} button`}
        txtButton="CONTACTO"
        onClick={handleToggleMenu}
      ></ButtonLink>
    </ul>
  );
}

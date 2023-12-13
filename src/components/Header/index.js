import React from "react";
import { NavMenu } from "../NavMenu";
import { FaBars } from "react-icons/fa6";

export function Header() {
  return (
    <header className="App-header">
      <nav className="nav-header">
        <NavMenu id="ul-header" classNameBtn="menu-header"></NavMenu>
        <FaBars id="icono-burger"></FaBars>
      </nav>

      {/* <!-- MENÚ DESPLEGABLE MOBILE --> */}
      <nav id="menu-mobile" className="contenedor-barra-mobile">
        <NavMenu id="lista-barra-mobile" className="barra-mobile"></NavMenu>
      </nav>
    </header>
  );
}

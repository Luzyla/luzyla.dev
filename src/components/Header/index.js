import React from "react";
import { NavMenu } from "../NavMenu";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="nav-header">
        <NavMenu id="ul-header"></NavMenu>
        <FaBars id="icono-burger"></FaBars>
        {/* <i id="icono-burger" className="fas fa-bars"></i> */}
      </nav>

      {/* <!-- MENÚ DESPLEGABLE MOBILE --> */}
      <nav id="menu-mobile" className="contenedor-barra-mobile">
        <NavMenu id="lista-barra-mobile" className="barra-mobile"></NavMenu>
      </nav>
    </header>
  );
}

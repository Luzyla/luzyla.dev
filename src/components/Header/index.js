import React, { useState } from "react";
import { NavMenu } from "../NavMenu";
import { FaBars } from "react-icons/fa6";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="App-header">
      <nav className="nav-header">
        <NavMenu id="ul-header" classNameBtn="menu-header"></NavMenu>
        <FaBars id="icono-burger" onClick={handleToggleMenu}></FaBars>
      </nav>

      {/* <!-- MENÚ DESPLEGABLE MOBILE --> */}
      <nav
        id="menu-mobile"
        className={`contenedor-barra-mobile ${
          showMenu ? "menu-desplegado" : ""
        }`}
      >
        <NavMenu
          id="lista-barra-mobile"
          classNameList="barra-mobile"
          classNameBtn="menu-header"
        ></NavMenu>
      </nav>
    </header>
  );
}

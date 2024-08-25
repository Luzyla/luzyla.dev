import React, { useEffect, useState } from "react";
import { NavMenu } from "../NavMenu";
import { FaBars } from "react-icons/fa6";

export function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="App-header header-fixed">
      <nav
        className={`${isMobile ? "nav-header" : "nav-header"} ${
          showMenu ? "menu-desplegado" : ""
        }`}
      >
        <FaBars
          className={isMobile ? "icono-burger" : "hidden"}
          onClick={handleToggleMenu}
        ></FaBars>
        <NavMenu
          classNameList={`${
            isMobile
              ? showMenu
                ? "barra-mobile contenedor-barra-mobile"
                : "hidden"
              : ""
          }`}
          classNameBtn="menu-header nav-header"
          handleToggleMenu={handleToggleMenu}
        ></NavMenu>
      </nav>
    </header>
  );
}

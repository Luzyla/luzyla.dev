import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { NavMenu } from "../NavMenu";

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    console.log("trigger");
    setShowMenu((prev) => !prev);
  };

  return (
    <div>
      <div onClick={handleToggleMenu}>
        <FaBars id="icono-burger" />
      </div>
      {showMenu && (
        <div>
          <NavMenu id="lista-barra-mobile" className="barra-mobile"></NavMenu>
        </div>
      )}
    </div>
  );
}

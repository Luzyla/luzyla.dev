import React from "react";
import { NavMenu } from "../NavMenu";
import { Signature } from "../Signature";
import { FreeResources } from "../FreeResources";
import { SocialMediaIcons } from "../SocialMediaIcons";

export function Footer() {
  return (
    <footer className="seccion-footer" id="a-redes">
      <nav className="nav-footer">
        <NavMenu classNameBtn="menu-footer"></NavMenu>
      </nav>

      <SocialMediaIcons
        classNameContainer="footer-socialmedia-icons"
        colorIcon="footer-color-icons"
        classNameIcon="footer-icons"
      />
      <Signature></Signature>

      <FreeResources></FreeResources>
    </footer>
  );
}

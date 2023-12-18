import React from "react";
import { NavMenu } from "../NavMenu";
import { SocialMedia } from "../SocialMedia";
import { Signature } from "../Signature";
import { FreeResources } from "../FreeResources";

export function Footer() {
  return (
    <footer className="seccion-footer">
      <nav className="nav-footer">
        <NavMenu classNameBtn="menu-footer"></NavMenu>
      </nav>

      <SocialMedia></SocialMedia>
      <Signature></Signature>
      <FreeResources></FreeResources>
    </footer>
  );
}

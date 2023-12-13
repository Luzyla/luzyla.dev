import React from "react";
import { NavMenu } from "../NavMenu";
import { SocialMedia } from "../SocialMedia";
import { Signature } from "../Signature";

export function Footer() {
  return (
    <footer className="seccion-footer">
      <nav className="nav-footer">
        <NavMenu classNameBtn="menu-footer"></NavMenu>
      </nav>

      <SocialMedia></SocialMedia>

      <Signature></Signature>

      <div className="footer-recursos">
        <a href="https://stories.freepik.com/web">
          Illustration by Stories by Freepik
        </a>
        <a href="https://fontawesome.com/icons">Icons by Fontawesome</a>
        <a
          href="https://www.flaticon.com/authors/darius-dan"
          title="Darius Dan"
        >
          favicon by Darius Dan
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}

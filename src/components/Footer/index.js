import React from "react";
import { NavMenu } from "../NavMenu";
import { Signature } from "../Signature";
import { FreeResources } from "../FreeResources";
import { SocialMediaIcons } from "../SocialMediaIcons";
import { Link as RouterLink } from "react-router-dom";

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
        contactMe={false}
      />
      <Signature></Signature>

      <div>
        <p className="link-privacy-footer">
          © Lucila Di Lorenzo |{" "}
          <RouterLink
            to="/legal-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Legal Notice
          </RouterLink>{" "}
          |{" "}
          <RouterLink
            to="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </RouterLink>
        </p>
      </div>

      <FreeResources></FreeResources>
    </footer>
  );
}

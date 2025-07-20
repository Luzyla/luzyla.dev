import React from "react";
import { Link } from "../Link";
import Emoji from "a11y-react-emoji/lib/Emoji";

export function Signature() {
  return (
    <div className="footer-signature-container">
      <p className="amor">
        Crafted with <Emoji symbol="❤️" label="corazón" /> and fueled by{" "}
        <Emoji symbol="🧉" label="matecito" /> by{" "}
        <span className="span-footer">
          <Link url="https://linkedin.com/in/luzyla" target="_blank">
            Luzyla
          </Link>
        </span>
      </p>
    </div>
  );
}

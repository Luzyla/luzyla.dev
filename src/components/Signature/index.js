import React from "react";
import { Link } from "../Link";
import Emoji from "a11y-react-emoji/lib/Emoji";

export function Signature() {
  return (
    <div>
      <p className="amor">
        Hecho con <Emoji symbol="❤️" label="corazón" /> y mucho{" "}
        <Emoji symbol="🧉" label="matecito" /> por{" "}
        <span className="span-footer">
          <Link url="https://linkedin.com/in/luzyla" target="_blank">
            Luzyla
          </Link>
        </span>
      </p>
    </div>
  );
}

import React from "react";
import { EmojiWrap } from "../EmojiWrap";
import { Link } from "../Link";

export function Signature() {
  return (
    <div>
      <p className="amor">
        Hecho con{" "}
        <EmojiWrap imgClass="emoji-size" ariaLabel="corazón">
          ❤️
        </EmojiWrap>{" "}
        y mucho{" "}
        <EmojiWrap imgClass="emoji-size" ariaLabel="mate">
          🧉
        </EmojiWrap>{" "}
        por{" "}
        <span className="span-footer">
          <Link url="https://linkedin.com/in/luzyla" target="_blank">
            Luzyla
          </Link>
        </span>
      </p>
    </div>
  );
}

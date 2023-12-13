import React from "react";
import { Link } from "../Link";
import { Image } from "../Image";

export function SocialMedia() {
  return (
    <div className="div-contacto" id="a-contacto">
      <Link url="https://github.com/Luzyla" target="_blank">
        <Image
          className="img-contacto"
          url="./images/social-media/github-00dfc0.svg"
          txtAlt="GitHub"
        ></Image>
      </Link>

      <Link url="https://linkedin.com/in/luzyla" target="_blank">
        <Image
          className="img-contacto"
          url="./images/social-media/linkedin-00dfc0.svg"
          txtAlt="LinkedIn"
        ></Image>
      </Link>

      <Link url="mailto:luzyla@gmail.com" target="_blank">
        <Image
          className="img-contacto"
          url="./images/social-media/at2-lu-00dfc0.svg"
          txtAlt="E-mail"
        ></Image>
      </Link>

      <Link url="http://luzyla.medium.com" target="_blank">
        <Image
          className="img-contacto"
          url="./images/social-media/medium-logo-2.svg"
          txtAlt="Medium"
        ></Image>
      </Link>
    </div>
  );
}

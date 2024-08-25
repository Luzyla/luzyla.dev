import React from "react";
import { ButtonLink } from "../ButtonLink";
import { Image } from "../Image";
import { SocialMediaIcons } from "../SocialMediaIcons";

export function Hola() {
  return (
    <section className="seccion-hola" id="a-hola">
      <div className="contenedor-hola">
        <div className="texto-hola">
          <h3>¡Hola! Soy</h3>
          <h1>Lucila Di Lorenzo</h1>
          <p className="p-hola">
            Desarrolladora FrontEnd, Scrum Master y curiosa por naturaleza!
          </p>

          <ul className="button-section">
            <ButtonLink
              url="#a-proyectos"
              className="button"
              txtButton="PORTFOLIO"
              classNameLink="icon-socialmedia"
            />
            <SocialMediaIcons />
          </ul>
        </div>
        <Image
          className="img-hola"
          url="../images/hola-lu-left.svg"
          txtAlt=""
        ></Image>
      </div>
    </section>
  );
}

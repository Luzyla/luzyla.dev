import React from "react";
import { Button } from "../Button";
import { Image } from "../Image";

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

          <ul>
            <Button
              url="#a-proyectos"
              className="button"
              txtButton="LO QUE HAGO"
            ></Button>
            <Button
              url="http://linkedin.com/in/luzyla"
              target="_blank"
              className="menu-header hola-link"
              txtButton="Más sobre mí"
            ></Button>
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

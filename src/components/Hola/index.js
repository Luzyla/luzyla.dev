import React from "react";
import { ButtonLink } from "../ButtonLink";
import { Image } from "../Image";
import { SocialMediaIcons } from "../SocialMediaIcons";

export function Hola() {
  return (
    <section className="seccion-hola" id="a-hola">
      <div className="contenedor-hola">
        <div className="texto-hola">
          <h3>Hello! I am</h3>
          <h1>Lucila Di Lorenzo</h1>
          <p className="p-hola">
            A FrontEnd Developer, Scrum Master, and naturally curious!
          </p>
          <p className="p-hola p-hello2">
            Leveraging a scientific background, I craft intuitive and performant web solutions with React, TypeScript, and modern UI architectures. 
          </p>

          <ul className="button-section">
            <ButtonLink
              url="#a-proyectos"
              className="button"
              txtButton="SEE MY PROJECTS"
              classNameLink="icon-socialmedia"
            />
            <SocialMediaIcons contactMe={false} />
          </ul>
        </div>
        <picture className="img-hola-container">
          <Image
            className="img-hola"
            url="../images/LuzylaDev.png"
            txtAlt="Avatar Luzyla.dev"
          ></Image>
        </picture>
        
      </div>
    </section>
  );
}

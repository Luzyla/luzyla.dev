import React from "react";
import { Card } from "../Card";

export function Skills() {
  return (
    <section className="seccion-skills" id="a-skills">
      <h2 className="h2-skills">Mis Conocimientos</h2>
      <p className="texto-skills">
        En lo que a programación se refiere, estas son las tecnologías de las
        que tengo dominio. Seguramente pronto serán algunas más!
      </p>

      <div className="contenedor-skills">
        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/html5.svg"
          altTxt="HTML5"
          txtContent="HTML 5"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/css3.svg"
          altTxt="CSS3"
          txtContent="CSS 3"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/sass.svg"
          altTxt="Saas"
          txtContent="Saas"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/javascript.svg"
          altTxt="JavaScript"
          txtContent="JavaScript"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/react.svg"
          altTxt="React"
          txtContent="React"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/git.svg"
          altTxt="GIT"
          txtContent="GIT"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/docker.svg"
          altTxt="Docker"
          txtContent="Docker"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/dbeaver.svg"
          altTxt="DBeaver"
          txtContent="DBeaver"
        ></Card>

        <Card
          cardClass="skills"
          imgClass="img-skills logos-skills"
          txtClass="p-titulo-skills"
          url="../images/logos/postman-api.svg"
          altTxt="Postman"
          txtContent="Postman"
        ></Card>
      </div>
    </section>
  );
}

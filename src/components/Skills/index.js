import React from "react";
import { Card } from "../Card";

const skillSet = [
  {
    id: 1,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/html5.svg",
    altTxt: "HTML5",
    txtContent: "HTML 5",
  },
  {
    id: 2,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/css3.svg",
    altTxt: "CSS3",
    txtContent: "CSS 3",
  },
  {
    id: 3,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/sass.svg",
    altTxt: "Saas",
    txtContent: "Saas",
  },
  {
    id: 4,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/javascript.svg",
    altTxt: "JavaScript",
    txtContent: "JavaScript",
  },
  {
    id: 5,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/react.svg",
    altTxt: "React",
    txtContent: "React",
  },
  {
    id: 6,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/git.svg",
    altTxt: "GIT",
    txtContent: "GIT",
  },
  {
    id: 7,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/next-js.svg",
    altTxt: "Next.js",
    txtContent: "Next.js",
  },
  {
    id: 8,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/dbeaver.svg",
    altTxt: "DBeaver",
    txtContent: "DBeaver",
  },
  {
    id: 9,
    cardClass: "skills",
    imgClass: "img-skills logos-skills",
    url: "../images/logos/postman-api.svg",
    altTxt: "Postman",
    txtContent: "Postman",
  },
];

export function Skills() {
  return (
    <section className="seccion-skills" id="a-skills">
      <h2 className="h2-skills">Mis Conocimientos</h2>
      <p className="texto-skills">
        En lo que a programación se refiere, estas son las tecnologías de las
        que tengo dominio. Seguramente pronto serán algunas más!
      </p>

      <div className="contenedor-skills">
        {skillSet.map((skill) => (
          <Card
            cardClass="skills"
            imgClass={skill.imgClass}
            txtClass="p-titulo-skills"
            url={skill.url}
            altTxt={skill.altTxt}
            txtContent={skill.txtContent}
          ></Card>
        ))}
      </div>
    </section>
  );
}

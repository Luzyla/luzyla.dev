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
    id: 14,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/typescript.png",
    altTxt: "React",
    txtContent: "TypeScript",
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
    url: "../images/logos/github-logo.svg",
    altTxt: "GitHub",
    txtContent: "GitHub",
  },
  {
    id: 8,
    cardClass: "skills",
    imgClass: "img-skills logos-skills",
    url: "../images/logos/ubuntu-inverse.svg",
    altTxt: "Linux Ubuntu",
    txtContent: "Linux Ubuntu",
  },
  {
    id: 9,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/bash.svg",
    altTxt: "Bash",
    txtContent: "Bash",
  },
  {
    id: 10,
    cardClass: "skills",
    imgClass: "img-skills logos-skills",
    url: "../images/logos/domain.png",
    altTxt: "Dominios web",
    txtContent: "Dominios web",
  },
 
  {
    id: 11,
    cardClass: "skills",
    imgClass: "img-skills logos-skills",
    url: "../images/logos/hosting.png",
    altTxt: "Hosting web",
    txtContent: "Hosting web",
  },
  {
    id: 12,
    cardClass: "skills",
    imgClass: "img-skills",
    url: "../images/logos/agile.png",
    altTxt: "Agile",
    txtContent: "Agile",
  },
  {
    id: 13,
    cardClass: "skills",
    imgClass: "img-skills logos-skills",
    url: "../images/logos/notion.svg",
    altTxt: "Notion",
    txtContent: "Notion",
  },
];

export function Skills() {
  return (
    <section className="seccion-skills" id="a-skills">
      <h2 className="h2-skills">Habilidades y Tecnologías</h2>

      <div className="contenedor-skills">
        {skillSet.map((skill) => (
          <Card
            key={skill.id}
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

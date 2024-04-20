import React, { useState } from "react";
import { SorterBar } from "../SorterBar";
import { Card } from "../Card";
import { Link } from "../Link";

const initProjectList = [
  {
    id: 1,
    link: "http://luzyla.github.io/proyecto-1-portfolio/",
    dataName: "html",
    imageUrl: "./images/portfolio.svg",
    altText: "Portfolio de Luzyla",
    txtContent: "Portfolio",
  },
  {
    id: 2,
    link: "http://luzyla.github.io/proyecto-2-tienda-viajes/",
    dataName: "js",
    imageUrl: "./images/tienda.svg",
    altText: "Tienda",
    txtContent: "Tienda",
  },
  {
    id: 3,
    link: "http://luzyla.github.io/proyecto-3-matcheadas/",
    dataName: "js",
    imageUrl: "./images/juego-memoria-si.svg",
    altText: "Juego",
    txtContent: "Juego",
  },
  {
    id: 4,
    link: "http://luzyla.github.io/proyecto-5-marvel-comics/",
    dataName: "js",
    imageUrl: "./images/admin-reuniones.svg",
    altText: "Buscador de Comics",
    txtContent: "Buscador de Comics",
  },
  {
    id: 5,
    link: "http://luzyla-proyecto-7.netlify.app",
    dataName: "react",
    imageUrl: "./images/movie-night.svg",
    altText: "Buscador de Películas",
    txtContent: "Buscador de Películas",
  },
  {
    id: 6,
    link: "http://inmobdilorenzo.com.ar",
    dataName: "html",
    imageUrl: "./images/bonsai-svgrepo-com.svg",
    altText: "MyTree Inmobiliaria DL",
    txtContent: "Inmobiliaria DL - MyTree",
  },
];

export function Proyectos() {
  const [projectList, setProjectList] = useState(initProjectList);

  const handleSortProjectList = (dataName) => {
    if (dataName === "all") {
      setProjectList([...initProjectList]);
    } else {
      const filteredArray = [...initProjectList].filter(
        (project) => project.dataName === dataName
      );
      setProjectList(filteredArray);
    }
  };

  return (
    <section className="seccion-proyectos" id="a-proyectos">
      <h2 className="h2-proyectos">Mis Proyectos</h2>

      <SorterBar onSort={handleSortProjectList} />

      <div className="contenedor-proyectos">
        {projectList.map((project) => (
          <Link url={project.link} target="_blank" key={project.id}>
            <Card
              dataName={project.dataName}
              cardClass="proyectos"
              imgClass="img-proyectos"
              url={project.imageUrl}
              altTxt={project.altText}
              txtClass="p-titulo-proyectos"
              txtContent={project.txtContent}
            ></Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

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
    imageUrl: "./images/ecommerce.svg",
    altText: "Tienda",
    txtContent: "Tienda",
  },
  {
    id: 3,
    link: "http://luzyla.github.io/proyecto-3-matcheadas/",
    dataName: "js",
    imageUrl: "./images/matcheadas.svg",
    altText: "Matcheadas",
    txtContent: "Matcheadas",
  },
  {
    id: 4,
    link: "http://luzyla.github.io/proyecto-5-marvel-comics/",
    dataName: "js",
    imageUrl: "./images/comics.svg",
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
    link: "https://luzyla.github.io/mytree/",
    dataName: "html",
    imageUrl: "./images/social-tree.svg",
    altText: "MyTree",
    txtContent: "MyTree",
  },
  {
    id: 7,
    link: "http://memelandia.luzyla.dev",
    dataName: "js",
    imageUrl: "./images/upload-memelandia.svg",
    altText: "Memelandia",
    txtContent: "Memelandia",
  },
  {
    id: 8,
    link: "https://luzyla.github.io/piedraPapelTijera/",
    dataName: "js",
    imageUrl: "./images/hands-play.svg",
    altText: "Piedra, papel o tijera",
    txtContent: "Piedra, papel o tijera",
  },
  {
    id: 9,
    link: "https://luzyla.github.io/mug/",
    dataName: "html",
    imageUrl: "./images/mug.svg",
    altText: "Mug",
    txtContent: "Mug",
  },
  {
    id: 10,
    link: "https://luzyla.github.io/librosyviajes-all/",
    dataName: "html",
    imageUrl: "./images/book-lover.svg",
    altText: "Libros y Viajes",
    txtContent: "Libros y Viajes",
  },
  {
    id: 11,
    link: "https://nleats-surprise.netlify.app/",
    dataName: "js",
    imageUrl: "./images/thank-you.svg",
    altText: "Random Quotes",
    txtContent: "Random Quotes",
  },
  /* {
    id: ,
    link: "http://tamarabrilla.com",
    dataName: "html",
    imageUrl: "./images/",
    altText: "Tamara Brilla",
    txtContent: "Tamara Brilla",
  }, */
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
      <h2 className="h2-proyectos">Portfolio</h2>

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

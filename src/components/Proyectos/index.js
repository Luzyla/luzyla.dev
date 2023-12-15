import React, { useState } from "react";
import { SorterBar } from "../SorterBar";
import { Card } from "../Card";
import { Link } from "../Link";

const initProjectList = [
  {
    id: 1,
    link: "http://luzyla.github.io/proyecto-1/",
    dataName: "html",
    imageUrl: "./images/portfolio.svg",
    altText: "Portfolio de Luzyla",
    txtContent: "Portfolio",
  },
  {
    id: 2,
    link: "http://luzyla.github.io/proyecto-2/",
    dataName: "js",
    imageUrl: "./images/tienda.svg",
    altText: "Tienda",
    txtContent: "Tienda",
  },
  {
    id: 3,
    link: "http://luzyla.github.io/proyecto-3/",
    dataName: "js",
    imageUrl: "./images/juego-memoria-si.svg",
    altText: "Juego",
    txtContent: "Juego",
  },
  {
    id: 4,
    link: "http://luzyla.github.io/proyecto-5/",
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

{
  /* <Link url="http://luzyla.github.io/proyecto-1/" target="_blank">
          <Card
            dataName="html"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/portfolio.svg"
            altTxt="Portfolio de Luzyla"
            txtClass="p-titulo-proyectos"
            txtContent="Portfolio"
          ></Card>
        </Link>

        <Link url="http://luzyla.github.io/proyecto-2/" target="_blank">
          <Card
            dataName="js"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/tienda.svg"
            altTxt="Tienda"
            txtClass="p-titulo-proyectos"
            txtContent="Tienda"
          ></Card>
        </Link>

        <Link url="http://luzyla.github.io/proyecto-3/" target="_blank">
          <Card
            dataName="js"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/juego-memoria-si.svg"
            altTxt="Juego"
            txtClass="p-titulo-proyectos"
            txtContent="Juego"
          ></Card>
        </Link>

        <Link url="http://luzyla.github.io/proyecto-5/" target="_blank">
          <Card
            dataName="js"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/admin-reuniones.svg"
            altTxt="Buscador de Comics"
            txtClass="p-titulo-proyectos"
            txtContent="Buscador Marvel Comics"
          ></Card>
        </Link>

        <Link url="http://luzyla-proyecto-7.netlify.app" target="_blank">
          <Card
            dataName="react"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/movie-night.svg"
            altTxt="Buscador de Películas"
            txtClass="p-titulo-proyectos"
            txtContent="Buscador de Películas"
          ></Card>
        </Link> */
}

{
  /* <Link url="http://inmobdilorenzo.com.ar" target="_blank">
          <Card
            dataName="html"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/"
            altTxt="MyTree Inmobiliaria DL"
            txtClass="p-titulo-proyectos"
            txtContent="MyTree Inmobiliaria DL"
          ></Card>
        </Link>

        <Link url="" target="_blank">
          <Card
            dataName="react"
            cardClass="proyectos"
            imgClass="img-proyectos"
            url="./images/"
            altTxt="Todo app"
            txtClass="p-titulo-proyectos"
            txtContent="Todo app"
          ></Card>
        </Link> */
}

import React, { useState } from "react";
import { SorterBar } from "../SorterBar";
import { Card } from "../Card";
import { Link } from "../Link";

const initProjectList = [
  {
    id: 1,
    link: "https://store.luzyla.dev/",
    dataName: "js",
    imageUrl: "./images/ecommerce.svg",
    altText: "Travel E-commerce",
    txtContent: "Travel E-commerce",
  },
  {
    id: 2,
    link: "http://luzyla.github.io/proyecto-3-matcheadas/",
    dataName: "js",
    imageUrl: "./images/matcheadas.svg",
    altText: "Match Game",
    txtContent: "Match Game",
  },
  {
    id: 3,
    link: "https://comics.luzyla.dev/",
    dataName: "js",
    imageUrl: "./images/comics.svg",
    altText: "Comic Search (Marvel API)",
    txtContent: "Marvel Comics Finder",
  },
  {
    id: 4,
    link: "http://luzyla-proyecto-7.netlify.app",
    dataName: "react",
    imageUrl: "./images/movie-night.svg",
    altText: "Movie Search",
    txtContent: "Movie Search",
  },
  {
    id: 5,
    link: "https://mytree.luzyla.dev/",
    dataName: "html", // migrar a reactd
    imageUrl: "./images/social-tree.svg",
    altText: "MyTree (Link-in-Bio Tool)",
    txtContent: "MyTree Tool",
  },
  {
    id: 6,
    link: "http://memelandia.luzyla.dev",
    dataName: "js",
    imageUrl: "./images/upload-memelandia.svg",
    altText: "Memelandia",
    txtContent: "Memelandia (Meme Maker)",
  },
  {
    id: 7,
    link: "https://game-rps.luzyla.dev/",
    dataName: "js",
    imageUrl: "./images/hands-play.svg",
    altText: "Rock, Paper, Scissors Game",
    txtContent: "Rock, Paper, Scissors Game",
  },
  {
    id: 8,
    link: "https://mug.luzyla.dev/",
    dataName: "html",
    imageUrl: "./images/mug.svg",
    altText: "Mug (Design Tribute)",
    txtContent: "Mug (Design Tribute)",
  },
  {
    id: 9,
    link: "https://booksandtrips.luzyla.dev/",
    dataName: "html",
    imageUrl: "./images/book-lover.svg",
    altText: "Books & Travels",
    txtContent: "Books & Travels",
  },
  {
    id: 10,
    link: "https://quotes.luzyla.dev/",
    dataName: "js",
    imageUrl: "./images/thank-you.svg",
    altText: "Random Quote Generator",
    txtContent: "Random Quote Generator",
  },
  {
    id: 11,
    link: "https://luzyla.github.io/todomachine-react-platzi/",
    dataName: "react",
    imageUrl: "./images/projects/Checklist-pana.svg",
    altText: "ToDo List Machine",
    txtContent: "To Do List",
  },
  {
    id: 12,
    link: "https://sentinel-luzyladev.vercel.app/",
    dataName: "react",
    imageUrl: "./images/projects/Sentinell.svg",
    altText: "Sentinell",
    txtContent: "Sentinell",
  }
 
];

export function Proyectos() {
  const [projectList, setProjectList] = useState(initProjectList);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSortProjectList = (dataName) => {
    if (dataName === "all") {
      setProjectList([...initProjectList]);
      setActiveCategory(dataName)
    } else {
      const filteredArray = [...initProjectList].filter(
        (project) => project.dataName === dataName
      );
      setProjectList(filteredArray);
      setActiveCategory(dataName)
    }
  };

  return (
    <section className="seccion-proyectos" id="a-proyectos">
      <h2 className="h2-proyectos">Projects</h2>

      <SorterBar onSort={handleSortProjectList} activeCategory={activeCategory} />

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

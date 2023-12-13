import React from "react";
import { SorterBar } from "../SorterBar";
import { Card } from "../Card";
import { Link } from "../Link";

export function Proyectos() {
  return (
    <section className="seccion-proyectos" id="a-proyectos">
      <h2 className="h2-proyectos">Mis Proyectos</h2>

      <SorterBar></SorterBar>

      <div className="contenedor-proyectos">
        <Link url="http://luzyla.github.io/proyecto-1/" target="_blank">
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
        </Link>

        {/* <Link url="http://inmobdilorenzo.com.ar" target="_blank">
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
        </Link> */}
      </div>
    </section>
  );
}

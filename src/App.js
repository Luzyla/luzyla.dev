import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Hola } from "./components/Hola";
import { Skills } from "./components/Skills";
import { Quote } from "./components/Quote";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hola></Hola>
      <Skills></Skills>
      <Quote></Quote>

      {/* <!-- SECCIÓN PROYECTOS --> */}

      <section className="seccion-proyectos" id="a-proyectos">
        <h2 className="h2-proyectos">Mis Proyectos</h2>

        <div className="botonera-proyectos">
          <button
            data-name="todos"
            className="menu-proyectos buttonClicked"
            id="boton-todos"
          >
            TODOS
          </button>
          <button data-name="html" className="menu-proyectos">
            HTML/CSS
          </button>
          <button data-name="js" className="menu-proyectos">
            JavaScript
          </button>
          <button data-name="react" className="menu-proyectos">
            React
          </button>
        </div>

        <div className="contenedor-proyectos">
          <a href="http://luzyla.github.io/proyecto-1/" target="_blank">
            <div data-name="html" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/portfolio.svg"
                alt="Portfolio de Luzyla"
              />
              <p className="p-titulo-proyectos">Portfolio</p>
            </div>
          </a>

          <a href="http://luzyla.github.io/proyecto-2/" target="_blank">
            <div data-name="js" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/tienda.svg"
                alt="Tienda"
              />
              <p className="p-titulo-proyectos">Tienda</p>
            </div>
          </a>

          <a href="http://luzyla.github.io/proyecto-3/" target="_blank">
            <div data-name="js" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/juego-memoria-si.svg"
                alt="Juego"
              />
              <p className="p-titulo-proyectos">Juego</p>
            </div>
          </a>

          <a href="http://luzyla.github.io/proyecto-4/" target="_blank">
            <div data-name="js" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/savings.svg"
                alt="Controlador de Gastos"
              />
              <p className="p-titulo-proyectos">Controlador de Gastos</p>
            </div>
          </a>

          <a href="http://luzyla.github.io/proyecto-5/" target="_blank">
            <div data-name="js" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/admin-reuniones.svg"
                alt="Buscador de Comics"
              />
              <p className="p-titulo-proyectos">Buscador Marvel Comics</p>
            </div>
          </a>

          <a href="http://luzyla.github.io/proyecto-6/" target="_blank">
            <div data-name="react" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/todo-app.svg"
                alt="Todo app"
              />
              <p className="p-titulo-proyectos">Todo app</p>
            </div>
          </a>

          <a href="http://luzyla.github.io/proyecto-7/" target="_blank">
            <div data-name="react" className="proyectos">
              <img
                className="img-proyectos"
                src="./images/movie-night.svg"
                alt="Buscador de Películas"
              />
              <p className="p-titulo-proyectos">Buscador de Películas</p>
            </div>
          </a>
        </div>
      </section>

      {/* <!-- FOOTER --> */}

      <footer className="seccion-footer">
        <nav className="nav-footer">
          <ul>
            <a href="#a-hola">
              <li className="menu-footer">HOLA</li>
            </a>
            <a href="#a-skills">
              <li className="menu-footer">CONOCIMIENTOS</li>
            </a>
            <a href="#a-proyectos">
              <li className="menu-footer">PROYECTOS</li>
            </a>
            <a href="#a-contacto">
              <li className="menu-footer">CONTACTO</li>
            </a>
          </ul>
        </nav>

        <div className="div-contacto" id="a-contacto">
          <a target="_blank" href="https://github.com/Luzyla">
            <img
              className="img-contacto"
              src="./images/social-media/github-00dfc0.svg"
            />
          </a>

          <a target="_blank" href="https://linkedin.com/in/luzyla">
            <img
              className="img-contacto"
              src="./images/social-media/linkedin-00dfc0.svg"
            />
          </a>

          <a target="_blank" href="mailto:luzyla@gmail.com">
            <img
              className="img-contacto"
              src="./images/social-media/at2-lu-00dfc0.svg"
            />
          </a>

          <a target="_blank" href="http://luzyla.medium.com">
            <img
              className="img-contacto"
              src="./images/social-media/medium-logo-2.svg"
            />
          </a>
        </div>

        <p className="amor">
          Hecho con <span className="emoji-size">❤️</span> y mucho{" "}
          <span className="emoji-size">🧉</span>
          por{" "}
          <span className="span-footer">
            <a href="https://github.com/Luzyla" target="_blank">
              Luzyla
            </a>
          </span>
        </p>

        {/* <!-- RECURSOS GRATUITOS
        <div className="footer-recursos">
            <a href="https://stories.freepik.com/web">Illustration by Stories by Freepik</a>
            <a href="https://fontawesome.com/icons">Icons by Fontawesome</a>
            <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">favicon by Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
        --> */}
      </footer>
    </div>
  );
}

export default App;

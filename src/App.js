import "./App.css";
// import { IconName } from "react-icons/fa";
import { Image } from "./components/Image";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* <!-- SECCIÓN HOLA --> */}

      <section className="seccion-hola" id="a-hola">
        <div className="contenedor-hola">
          <div className="texto-hola">
            <h3>¡Hola! Soy</h3>
            <h1>Lucila Di Lorenzo</h1>
            <p className="p-hola">
              Desarrolladora FrontEnd, Scrum Master y curiosa por naturaleza!
            </p>

            <ul>
              <a href="#a-proyectos">
                <li className="button">LO QUE HAGO</li>
              </a>
            </ul>
          </div>
          <Image
            className="img-hola"
            url="../images/hola-lu-left.svg"
            txtAlt=""
          ></Image>
        </div>
      </section>

      {/* <!-- SECCIÓN SKILLS --> */}

      <section className="seccion-skills" id="a-skills">
        <h2 className="h2-skills">Mis Conocimientos</h2>
        <p className="texto-skills">
          En lo que a programación se refiere, estas son las tecnologías de las
          que tengo dominio. Seguramente pronto serán algunas más!
        </p>

        <div className="contenedor-skills">
          <div className="skills">
            <img
              className="img-skills"
              src="./images/logos/html5.svg"
              alt="HTML5"
            />
            <p className="p-titulo-skills">HTML 5</p>
          </div>

          <div className="skills">
            <img
              className="img-skills"
              src="./images/logos/css3.svg"
              alt="CSS3"
            />
            <p className="p-titulo-skills">CSS 3</p>
          </div>

          <div className="skills">
            <img
              className="img-skills"
              src="./images/logos/sass.svg"
              alt="Saas"
            />
            <p className="p-titulo-skills">Saas</p>
          </div>

          <div className="skills">
            <img
              className="img-skills"
              src="./images/logos/javascript.svg"
              alt="JavaScript"
            />
            <p className="p-titulo-skills">JavaScript</p>
          </div>

          <div className="skills">
            <img
              className="img-skills"
              src="./images/logos/react.svg"
              alt="React"
            />
            <p className="p-titulo-skills">React</p>
          </div>

          <div className="skills">
            <img
              className="img-skills"
              src="./images/logos/git.svg"
              alt="GIT"
            />
            <p className="p-titulo-skills">GIT</p>
          </div>

          <div className="skills">
            <img
              className="img-skills logos-skills"
              src="./images/logos/docker.svg"
              alt="Docker"
            />
            <p className="p-titulo-skills">Docker</p>
          </div>

          <div className="skills">
            <img
              className="img-skills logos-skills"
              src="./images/logos/dbeaver.svg"
              alt="DBeaver"
            />
            <p className="p-titulo-skills">DBeaver</p>
          </div>

          <div className="skills">
            <img
              className="img-skills logos-skills"
              src="./images/logos/postman-api.svg"
              alt="Postman"
            />
            <p className="p-titulo-skills">Postman</p>
          </div>
        </div>
      </section>

      {/* <!-- SECCIÓN QUOTE --> */}

      <section className="seccion-quote" id="a-quote">
        <div className="div-quote">
          {/* <!-- FONTAWESOME --> */}
          <i className="fas fa-brain ico-quote"></i>

          <blockquote>
            <p className="p-quote">
              "Imagination is more important than knowledge.
            </p>
            <p className="p-quote">Knowledge is limited.</p>
            <p className="p-quote">Imagination encircles the world."</p>
          </blockquote>

          <h3 className="h3-quote">Albert Einstein</h3>
        </div>
      </section>

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

import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Hola } from "./components/Hola";
import { Skills } from "./components/Skills";
import { Quote } from "./components/Quote";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hola></Hola>
      <Skills></Skills>
      <Quote></Quote>
      <Proyectos></Proyectos>

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

        {/* <div className="div-contacto" id="a-contacto">
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
        </div> */}

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

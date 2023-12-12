import { Button } from "../Button";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="nav-header">
        <ul id="ul-header">
          <Button
            url="#a-hola"
            className="menu-header"
            txtButton="HOLA"
          ></Button>
          <Button
            url="#a-skills"
            className="menu-header"
            txtButton="CONOCIMIENTOS"
          ></Button>
          <Button
            url="#a-proyectos"
            className="menu-header"
            txtButton="PROYECTOS"
          ></Button>
          <Button
            url="#a-contacto"
            className="menu-header button"
            txtButton="CONTACTO"
          ></Button>
        </ul>
        <i id="icono-burger" className="fas fa-bars"></i>
      </nav>

      {/* <!-- MENÚ DESPLEGABLE MOBILE --> */}
      <nav id="menu-mobile" className="contenedor-barra-mobile">
        <ul id="lista-barra-mobile" className="barra-mobile">
          <a href="#a-hola">
            <li className="menu-header">HOLA</li>
          </a>
          <a href="#a-skills">
            <li className="menu-header">CONOCIMIENTOS</li>
          </a>
          <a href="#a-proyectos">
            <li className="menu-header">PROYECTOS</li>
          </a>
          <a href="#a-contacto">
            <li className="menu-header button">CONTACTO</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

import { ButtonButton } from "../ButtonButton";

export function SorterBar({ onSort, activeCategory }) {

  return (
    <div className="botonera-proyectos">
      <ButtonButton
        data-name="todos"
        className={activeCategory === 'all' ? 'menu-proyectos buttonClicked' : 'menu-proyectos'}
        id="boton-todos"
        txtButton="ALL"
        onClick={() => onSort("all")}
      ></ButtonButton>

      <ButtonButton
        data-name="html"
        className={activeCategory === 'html' ? 'menu-proyectos buttonClicked' : 'menu-proyectos'}
        txtButton="HTML/CSS"
        onClick={() => onSort("html")}
      ></ButtonButton>

      <ButtonButton
        data-name="js"
        className={activeCategory === 'js' ? 'menu-proyectos buttonClicked' : 'menu-proyectos'}
        txtButton="JavaScript"
        onClick={() => onSort("js")}
      ></ButtonButton>

      <ButtonButton
        data-name="react"
        className={activeCategory === 'react' ? 'menu-proyectos buttonClicked' : 'menu-proyectos'}
        txtButton="React"
        onClick={() => onSort("react")}
      ></ButtonButton>
    </div>
  );
}

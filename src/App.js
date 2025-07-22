import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hola } from "./components/Hola";
import { Proyectos } from "./components/Proyectos";
import { Quote } from "./components/Quote";
import { Skills } from "./components/Skills";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";


function App() {
const [theme, setTheme] = useState("light");

  return (
    <div className={`App ${theme}`}>
      <Header
        theme={theme}
        setTheme={setTheme}
      ></Header>
      <Hola></Hola>
      <Proyectos></Proyectos>
      <Quote></Quote>
      <Skills></Skills>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;

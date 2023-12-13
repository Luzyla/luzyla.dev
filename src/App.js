import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Hola } from "./components/Hola";
import { Skills } from "./components/Skills";
import { Quote } from "./components/Quote";
import { Proyectos } from "./components/Proyectos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hola></Hola>
      <Skills></Skills>
      <Quote></Quote>
      <Proyectos></Proyectos>
      <Footer></Footer>
    </div>
  );
}

export default App;

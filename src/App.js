import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Hola } from "./components/Hola";
import { Skills } from "./components/Skills";
import { Quote } from "./components/Quote";
import { Proyectos } from "./components/Proyectos";
import { Footer } from "./components/Footer";
import Meta from "./components/MetaData";

function App() {
  return (
    <div className="App">
      <Meta></Meta>
      <Header></Header>
      <Hola></Hola>
      <Proyectos></Proyectos>
      <Quote></Quote>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;

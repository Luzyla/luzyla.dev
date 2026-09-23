import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hola } from "./components/Hola";
import { Proyectos } from "./components/Proyectos";
import { Quote } from "./components/Quote";
import { Skills } from "./components/Skills";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { LegalNotice } from "./pages/legal-notice";
import { PrivacyPolicy } from "./pages/privacy-policy";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hola></Hola>
              <Proyectos></Proyectos>
              <Quote></Quote>
              <Skills></Skills>
              <Contacto></Contacto>
            </>
          }
        ></Route>

        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/legal-notice" element={<LegalNotice />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

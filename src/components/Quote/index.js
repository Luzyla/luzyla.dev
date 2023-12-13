import React from "react";
import { FaMedapps } from "react-icons/fa6";

export function Quote() {
  const isMobile = window.innerWidth <= 768;
  return (
    <section className="seccion-quote" id="a-quote">
      <div className="div-quote">
        <FaMedapps className="ico-quote" size={isMobile ? "fa-sm" : "fa-2xl"} />

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
  );
}

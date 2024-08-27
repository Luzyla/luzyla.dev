import React from "react";
import { useState } from "react";
import { SocialMediaIcons } from "../SocialMediaIcons";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbz2mSa72HENxtrX8FmnE-H27CzEEV6q-_V0-2MiOBnL50pijVRPm_h4w8XKrvf9giIPKQ/exec";

      const formDataToSend = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      fetch(scriptURL, {
        redirect: "follow",
        method: "POST",
        body: formDataToSend.toString(),
        headers: {
          "Content-type": "text/plain;charset=utf-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Formulario enviado: ", data);
          setSent(true);
          setFormData({ nombre: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Error (then) al enviar el formulario: ", error);
        });
    } catch (error) {
      console.log("Error al enviar el formulario: ", error);
    }
  };

  return (
    <section className="seccion-contacto" id="a-contacto">
      <h2 className="h2-contacto">Contactame</h2>
      <div className="contenedor-asides">
        <picture className="contenedor-img-contacto">
          <img src="../images/contact/Feedback-amico.svg" alt="" />
        </picture>
        <aside className="contenedor-aside-icons">
          <SocialMediaIcons
            classNameContainer="contenedor-iconos-contacto"
            colorIcon="var(--color-pc)"
            sizeIcon="2.8rem"
            classNameIcon="icons-contact"
            classNameIconsTitle="icons-title"
            contactMe={true}
          ></SocialMediaIcons>
        </aside>

        <div className="contenedor-form">
          <form onSubmit={handleSubmit} id="form-id">
            {sent ? (
              <p className="msg-form-enviado">¡Formulario enviado con éxito!</p>
            ) : null}
            <label id="nombre" className="etiqueta-form">
              Nombre*:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="campo-form"
                required
              />
            </label>

            <label id="email" className="etiqueta-form">
              E-mail*:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="campo-form"
                required
              />
            </label>

            <label id="message" className="etiqueta-form">
              Mensaje*:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="campo-form campo-form-msg"
                placeholder="Escribe aquí tu mensaje"
                required
              />
            </label>

            <input
              type="submit"
              value={"ENVIAR"}
              className="button campo-form campo-form-button"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { useState } from "react";
import { SocialMediaIcons } from "../SocialMediaIcons";
import { Link } from "../Link";
import { Link as RouterLink } from "react-router-dom";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot && formData.honeypot.length > 0) {
      console.log("BOT DETECTADO", formData.honeypot);
      setSent(true);
      setFormData({ nombre: "", email: "", message: "", honeypot: "" });
      return;
    }

    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycby0zrVlZecbuTTbPwwMRF5oG5mk6mVRpRO32l5QBXuSbN0aL9mg7NS5woM8hzg_fkz0jQ/exec";

    const body = `nombre=${encodeURIComponent(formData.nombre)}&email=${encodeURIComponent(formData.email)}&message=${encodeURIComponent(formData.message)}`;

    console.log("Enviando:", body);

    fetch(scriptURL, {
      redirect: "follow",
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "text/plain;charset=utf-8",
      },
      body: body,
    })
      .then(() => {
        console.log("Formulario enviado!");

        setSent(true);
        setFormData({ nombre: "", email: "", message: "", honeypot: "" });
      })
      .catch((error) => {
        console.log("Error al enviar el formulario: ", error);
        alert(
          "Hubo un error al enviar el formulario. Por favor intentá de nuevo.",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="seccion-contacto" id="a-contacto">
      <h2 className="h2-contacto">Get in Touch!</h2>
      <div className="contenedor-asides">
        <picture className="contenedor-img-contacto">
          <img src="../images/contact/Feedback-amico.svg" alt="" />
        </picture>
        <aside className="contenedor-aside-icons">
          <SocialMediaIcons
            classNameContainer="contenedor-iconos-contacto"
            colorIcon="var(--color-icons)"
            sizeIcon="2.8rem"
            classNameIcon="icons-contact"
            classNameIconsTitle="icons-title"
            contactMe={true}
          ></SocialMediaIcons>
        </aside>

        <div className="contenedor-form">
          <form onSubmit={handleSubmit} id="form-id">
            {sent ? (
              <p className="msg-form-enviado">Form submitted successfully!</p>
            ) : null}
            <label id="nombre" className="etiqueta-form">
              Name*:
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
              Message*:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="campo-form campo-form-msg"
                placeholder="Write your message here"
                required
              />
            </label>

            <label id="honeypot" className="etiqueta-form hidden">
              Honeypot*:
              <textarea
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="campo-form campo-form-msg"
                placeholder="Write your message here"
                autoComplete="off"
              />
            </label>
            <div className="privacycheck-form">
              <input type="checkbox" required></input> I have read and accept
              the{" "}
              <RouterLink
                to="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </RouterLink>
              .
            </div>
            <input
              type="submit"
              value={"SUBMIT"}
              className="button campo-form campo-form-button"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

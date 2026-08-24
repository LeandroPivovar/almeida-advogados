"use client";

import { FormEvent, useState } from "react";

const whatsappPhone = "5548988325964";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Olá, Ermeson Advogados. Gostaria de agendar uma análise jurídica.",
      name ? `Nome: ${name}` : "",
      phone ? `Telefone: ${phone}` : "",
      subject ? `Assunto: ${subject}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Nome</span>
        <input
          autoComplete="name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Seu nome"
          type="text"
          value={name}
        />
      </label>
      <label>
        <span>Telefone</span>
        <input
          autoComplete="tel"
          inputMode="tel"
          name="phone"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="(48) 00000-0000"
          type="tel"
          value={phone}
        />
      </label>
      <label>
        <span>Assunto</span>
        <textarea
          name="subject"
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Conte brevemente o que precisa resolver"
          rows={4}
          value={subject}
        />
      </label>
      <button type="submit">Enviar pelo WhatsApp</button>
    </form>
  );
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Form() {
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    setIsSending(true);
    setFeedbackMessage("");

    console.log({
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID,
      key: EMAILJS_PUBLIC_KEY,
    });

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setFeedbackMessage("Boa! Sua Nave agradece!");
      if (form) form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulario com EmailJS:", error);
      setFeedbackMessage("Erro ao enviar. Tente novamente em instantes.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="form-container">
      <fieldset className="formulario-contato">
        <legend>Entre em contato e agende o spa do seu carro!</legend>
        <div className="form">
          <form
            id="contact-form"
            name="formulario-de-cadastro"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label>Nome:</label> <input type="text" name="name" required />
            <br />
            <br />
            <label>Email:</label> <input type="email" name="email" required />
            <br />
            <br />
            <label>Marca e modelo do veículo:</label>{" "}
            <input type="text" name="vehicle_model" required />
            <br />
            <br />
            <label>Ano do veículo:</label>{" "}
            <input
              type="number"
              min="1950"
              max="2027"
              name="vehicle_year"
              required
            />
            <br />
            <br />
            <label>Cor do veículo: </label>
            <input type="color" name="vehicle_color" required />
            <br />
            <br />
            <label>O que está ofuscando a beleza do seu carro?</label>
            <textarea type="text" name="message" required></textarea> <br />
            <br />
            <label>Melhor data de agendamento: </label>{" "}
            <input type="date" name="appointment_date" required />
            <br />
            <br />
            <div className="botoes-form-container">
              <button className="button-form" type="reset">
                Limpar
              </button>
              <button
                className="button-form"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Pronto!"}
              </button>
            </div>
            {feedbackMessage && <p>{feedbackMessage}</p>}
          </form>
        </div>
      </fieldset>
    </div>
  );
}

export default Form;

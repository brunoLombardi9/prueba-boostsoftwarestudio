import { useState } from "react";
import AlertModal from "./AlertModal";

const inputStyles =
  "w-full placeholder-black border-strongOrange bg-transparent p-5 border-2 focus:border-strongOrange rounded";

const ContactForm = () => {
  const [modal, setModal] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  

  async function handleForm(e) {
    e.preventDefault();

    if (phone.length < 8 || phone.length > 20) {
      setModal("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    if (message.length < 15) {
      setModal("Por favor, escribe un mensaje mas largo.");
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setModal("Su consulta ha sido enviada con éxito, le responderemos a la brevedad!");
  }

  return (
    <>
      {modal && <AlertModal message={modal} closeModal={() => setModal("")} />}

      <form
        onSubmit={handleForm}
        className={`h-full flex flex-col gap-4 mt-[30px] md:mt-0`}
      >
        <h2 className="text-2xl font-bold mb-[30px]">Contactanos</h2>
        <input
          type="text"
          placeholder="Nombre"
          className={inputStyles}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="E-mail (opcional)"
            className={inputStyles}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="number"
            placeholder="Número de teléfono"
            className={inputStyles}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <textarea
          type="text"
          placeholder="Consulta"
          className={inputStyles}
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />

        <button
          type="submit"
          className={`bg-orange hover:bg-strongOrange hover:text-black transition-all p-4 text-xl font-bold flex justify-center items-center text-center rounded`}
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default ContactForm;

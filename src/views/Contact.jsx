import { BsGeoAlt } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import ContactForm from "../components/Contact/ContactForm";

const contactInfo = [
  {
    name: "Dirección",
    icon: BsGeoAlt,
    text: "Munro, Vicente Lopez. Buenos Aires, Argentina",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    text: "https://www.instagram.com/",
  },
  {
    name: "Teléfono",
    icon: BsTelephone,
    text: "114455889",
  },
];

const Contact = () => {
  return (
      <section >
        <h1 className="text-center text-5xl md:text-6xl mb-[40px]">
          Contacto
        </h1>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto  h-full w-[90%] md:w-[80%]`}
        >
          <div className={`flex flex-col gap-10`}>
            <h2 className="text-2xl font-bold">Pizzería Tagline</h2>
            <p className="text-md">
              Ponte en contacto con nosotros para que puedas reservar tu mesa y
              te responderemos lo antes posible!
            </p>
            <div className="flex flex-col gap-8">
              {contactInfo.map((c) => (
                <div key={c.name} className="flex place-items-center gap-4">
                  <div className="p-5 rounded-full border-strongOrange border-2">
                    {<c.icon size={25} className="fill-strongOrange" />}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-xl">{c.name}</h3>
                    {c.name !== "Instagram" ? (
                      <p>{c.text}</p>
                    ) : (
                      <a
                        className={`hover:text-strongOrange`}
                        href={c.text}
                        target="_blank"
                      >
                        {c.text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

  );
};

export default Contact;

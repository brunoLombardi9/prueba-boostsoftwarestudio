import hornoDeBarro from "../../assets/hornoDeBarro.jpg";
import pizzaCortando from "../../assets/pizzaCortando.jpg";
import pizzaFamilia from "../../assets/pizzaFamilia.jpg";
import AnimationContainer from "../AnimationContainer";

const About = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-8 py-10 my-auto px-5 lg:px-[150px] ">
        <AnimationContainer>
          <h2 className="text-center text-2xl">
            Somos Pizzería Tagline, tu mejor elección para disfrutar de la
            auténtica <span className="text-strongOrange">pizza artesanal</span>
          </h2>
          <p className="text-center text-xl mt-5">
            Nuestros clientes no solo vienen por nuestras exquisitas pizzas,
            sino también porque somos el lugar ideal para compartir momentos
            especiales con la familia o amigos.
          </p>
        </AnimationContainer>

        {aboutItems.map((item, index) => (
          <div
            className={`flex flex-col lg:flex-row gap-4 mt-10 md:mt-0 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            key={item.title}
          >
            <AnimationContainer>
              <img
                src={item.picture}
                className=" w-full lg:max-w-[400px] rounded"
                alt={item.title}
              />
            </AnimationContainer>

            <AnimationContainer>
              <div className="flex flex-col gap-7 justify-center md:text-justify">
                <h2 className="text-4xl text-strongOrange mt-4">
                  {item.title}
                </h2>
                <p className="text-2xl md:text-justify">{item.text}</p>
              </div>
            </AnimationContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

const aboutItems = [
  {
    picture: hornoDeBarro,
    title: "Nuestra calidad",
    text: "Utilizamos ingredientes frescos y de la más alta calidad para garantizar que cada pizza sea una obra maestra culinaria.",
  },
  {
    picture: pizzaCortando,
    title: "Nuestro menú",
    text: "Innovamos constantemente en nuestro menú para ofrecerte nuevas y emocionantes combinaciones de sabores.",
  },
  {
    picture: pizzaFamilia,
    title: "Un lugar para la familia",
    text: "Nos enorgullece ofrecer un ambiente acogedor y familiar, donde cada cliente se siente como en casa.",
  },
];

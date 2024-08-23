import "../../styles/Home/Hero.css";
import { Link } from "react-router-dom";
import goUp from "../../utils/goUp.js";
import { transitions150 } from "../../utils/transitions.js";
import AnimationContainer from "../AnimationContainer.jsx";

const Hero = () => {
  return (
    // <AnimationContainer>
    <section
      id="hero"
      className="flex flex-col justify-center items-center gap- text-white"
    >
      <AnimationContainer>
        <h1 className=" font-bold text-4xl md:text-6xl">Pizzería Tagline</h1>

        <p className="text-md md:text-xl text-center max-w-[90%] md:max-w-[60%] mx-auto mt-5">
          Bienvenidos a nuestra Tagline, donde cada pizza se prepara con pasión
          y los ingredientes más frescos. Disfruta de sabores auténticos en un
          ambiente acogedor.
        </p>

        <div className="flex justify-center gap-5 mt-5">
          <Link to="/foods" onClick={goUp}>
            <button
              className={`py-4 px-2 font-bold rounded bg-orange hover:bg-strongOrange border-orange hover:border-strongOrange border-2 ${transitions150}`}
            >
              Nuestras comidas
            </button>
          </Link>

          <Link to="/contact" onClick={goUp}>
            <button
              className={`py-4 px-2 font-bold rounded bg-transparent hover:bg-white hover:text-black border-white border-2 ${transitions150}`}
            >
              Reserva tu mesa
            </button>
          </Link>
        </div>
      </AnimationContainer>
    </section>
  );
};

export default Hero;

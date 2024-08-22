import "../styles/Home/Hero.css";
import { Link } from "react-router-dom";
import goUp from "../utils/goUp";


const Home = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center gap-5 text-white"
    >
      <h1 className=" font-bold text-4xl md:text-6xl">Pizzería Tagline</h1>
      <p className="textl-md md:text-xl text-center max-w-[90%] md:max-w-[60%]">
        Bienvenidos a nuestra Tagline, donde cada pizza se prepara con pasión y
        los ingredientes más frescos. Disfruta de sabores auténticos en un
        ambiente acogedor.
      </p>

      <div className="flex justify-center gap-5">
        <Link to="/pizzas" onClick={goUp}>
          <button
            className={`py-4 px-2 font-bold rounded bg-orange hover:bg-strongOrange border-orange hover:border-strongOrange border-2 ${transitions}`}
          >
            Nuestras pizzas
          </button>
        </Link>

        <Link to="/contact" onClick={goUp}>
          <button
            className={`py-4 px-2 font-bold rounded bg-transparent hover:bg-white hover:text-black border-white border-2 ${transitions}`}
          >
            Reserva tu mesa
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;

const transitions = "transition-all duration-150 ease-in-out";

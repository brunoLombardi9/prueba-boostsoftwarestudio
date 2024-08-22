import React from "react";
import { Link } from "react-router-dom";
import goUp from "../utils/goUp";
import { transitions150 } from "../utils/transitions";

const Error404 = () => {
  return (
    <section>
      <h1 className="text-center text-5xl md:text-6xl mb-[40px]">
        Página no encontrada
      </h1>

      <div className="flex justify-center gap-5">
        <Link to="/" onClick={goUp}>
          <button
            className={`flex gap-4 justify-center items-center py-4 px-2 font-bold rounded bg-orange hover:bg-strongOrange border-orange hover:border-strongOrange border-2 ${transitions150}`}
          >
            Regresa al inicio
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;


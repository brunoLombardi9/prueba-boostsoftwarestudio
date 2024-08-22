import { useState } from "react";
import "../../styles/Products/PizzaCard.css";
import { BounceLoader } from "react-spinners";

const PizzaCard = ({ pizza }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={`cardContainer text-white bg-white rounded flex justify-center items-center ${
        loading && "px-5 py-10"
      }`}
    >
      <img
        src={pizza.picture}
        alt={pizza.name}
        onLoad={() => setLoading(false)}
        className={`${loading && "hidden"}`}
        loading="lazy"
      />
      {loading ? (
        <BounceLoader aria-label="Loading Spinner" data-testid="loader" />
      ) : (
        <div className="overlay flex justify-center">
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h2 className="text-xl font-bold">{pizza.name}</h2>
            <h3>{pizza.ingredients}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default PizzaCard;

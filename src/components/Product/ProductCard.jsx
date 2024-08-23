import { useState } from "react";
import "../../styles/Products/ProductCard.css";
import { BounceLoader } from "react-spinners";
import AnimationContainer from "../AnimationContainer";

const ProductCard = ({ pizza }) => {
  const [loading, setLoading] = useState(true);
  return (
    <AnimationContainer>
    <div
      className={`cardContainer text-white bg-white rounded flex justify-center items-center h-full w-full ${
        loading && "px-5 py-10"
      }`}
    >
      <img
        src={pizza.picture}
        alt={pizza.name}
        onLoad={() => setLoading(false)}
        className={`${loading && "hidden"}`}
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
    </AnimationContainer>
  );
};

export default ProductCard;

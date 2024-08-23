import { useState, useEffect, useRef } from "react";
import "../../styles/Products/ProductCard.css";
import { BounceLoader } from "react-spinners";
import AnimationContainer from "../AnimationContainer";

const ProductCard = ({ pizza }) => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const isCardInMiddle =
          cardCenter > windowHeight / 2 - 150 &&
          cardCenter < windowHeight / 2 + 150;

        setIsVisible(isCardInMiddle);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimationContainer>
      <div
        ref={cardRef}
        className={`cardContainer text-white bg-white rounded flex justify-center items-center h-full w-[90%] md:w-full mx-auto
                  ${loading && "px-5 py-10"} ${isVisible && "showOnMobile"}`}
      >
        <img
          src={pizza.picture}
          alt={pizza.name}
          onLoad={() => setLoading(false)}
          className={`${loading && "hidden"} `}
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

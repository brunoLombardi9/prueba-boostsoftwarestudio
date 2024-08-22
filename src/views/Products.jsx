import JamonYMorrones from "../assets/Pizzas/JamonYMorron.jpg";
import Muzarella from "../assets/Pizzas/Muzza.png";
import Napolitana from "../assets/Pizzas/Napolitana.jpg";
import Fugazetta from "../assets/Pizzas/Fugazetta.jpg";
import Calabresa from "../assets/Pizzas/calabresa.jpg";
import Rucula from "../assets/Pizzas/Rucula.jpg";
import DobleMuzza from "../assets/Pizzas/dobleMuzza.png";
import empanada from "../assets/empanada.webp";
import Jamon from "../assets/Pizzas/Jamon.jpg";
import ProductCard from "../components/Product/ProductCard";
import { useState } from "react";
import goUp from "../utils/goUp";
import { transitions150 } from "../utils/transitions.js";

const categories = ["Todos", "Pizzas", "Empanadas"];

const Products = () => {
  const [category, setCategory] = useState(categories[0]);
  const selectedFoods =
    category === "Todos"
      ? foods
      : foods.filter((food) => food.category === category.toLowerCase());

  function handleCategoryChange(category) {
    setCategory(category);
    goUp();
  }

  return (
    <section className="text-center">
      <h1 className="text-center text-5xl md:text-6xl mb-[40px]">
        Nuestras comidas
      </h1>

      <h2 className="mb-5">
        Conoce nuestra variedad de pizzas y empanadas caseras
      </h2>

      <div className="flex gap-4 justify-center items-center mb-5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => handleCategoryChange(c)}
            className={`font-bold p-4 border-2 rounded w-[110px] md:w-[130px] flex justify-center items-center text-center ${transitions150} ${
              category === c
                ? "bg-strongOrange border-strongOrange text-white"
                : "border-orange hover:bg-orange"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
        {selectedFoods.map((pizza) => (
          <ProductCard pizza={pizza} key={pizza.name} />
        ))}
      </div>
    </section>
  );
};

export default Products;

const foods = [
  {
    name: "Muzzarella",
    ingredients: "Salsa de tomate, muzzarella y aceitunas",
    picture: Muzarella,
    category: "pizzas",
  },
  {
    name: "Doble Muzzarella",
    ingredients: "Salsa de tomate y doble porción de muzzarella",
    picture: DobleMuzza,
    category: "pizzas",
  },
  {
    name: "Fugazzetta",
    ingredients: "Muzzarella, cebolla y orégano",
    picture: Fugazetta,
    category: "pizzas",
  },
  {
    name: "Jamón",
    ingredients: "Salsa de tomate, muzzarella y jamón",
    picture: Jamon,
    category: "pizzas",
  },
  {
    name: "Jamón y Morrón",
    ingredients: "Salsa de tomate, muzzarella, jamón y morrones",
    picture: JamonYMorrones,
    category: "pizzas",
  },
  {
    name: "Napolitana",
    ingredients: "Salsa de tomate, muzzarella, rodajas de tomate y ajo",
    picture: Napolitana,
    category: "pizzas",
  },
  {
    name: "Calabresa",
    ingredients: "Salsa de tomate, muzzarella y longaniza",
    picture: Calabresa,
    category: "pizzas",
  },
  {
    name: "Rúcula",
    ingredients: "Salsa de tomate, muzzarella y rúcula",
    picture: Rucula,
    category: "pizzas",
  },
  {
    name: "Empanada de Carne",
    ingredients: "Carne picada, cebolla, huevo, aceitunas y condimentos",
    picture: empanada,
    category: "empanadas",
  },
  {
    name: "Empanada de Jamón y Queso",
    ingredients: "Jamón cocido y muzzarella",
    picture: empanada,
    category: "empanadas",
  },
  {
    name: "Empanada de Pollo",
    ingredients: "Pollo desmenuzado, cebolla, morrón y condimentos",
    picture: empanada,
    category: "empanadas",
  },
  {
    name: "Empanada de Humita",
    ingredients: "Choclo, salsa blanca y queso",
    picture: empanada,
    category: "empanadas",
  },
  {
    name: "Empanada Caprese",
    ingredients: "Muzzarella, tomate y albahaca",
    picture: empanada,
    category: "empanadas",
  },
  {
    name: "Empanada de Verdura",
    ingredients: "Espinaca y queso ricota",
    picture: empanada,
    category: "empanadas",
  },
];

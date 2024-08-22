import JamonYMorrones from "../assets/Pizzas/JamonYMorron.jpg";
import Muzarella from "../assets/Pizzas/Muzza.png";
import Napolitana from "../assets/Pizzas/Napolitana.jpg";
import Fugazetta from "../assets/Pizzas/Fugazetta.jpg";
import Calabresa from "../assets/Pizzas/calabresa.jpg";
import Rucula from "../assets/Pizzas/Rucula.jpg";
import DobleMuzza from "../assets/Pizzas/dobleMuzza.png";
import Jamon from "../assets/Pizzas/Jamon.jpg";
import PizzaCard from "../components/Product/PizzaCard";

const Products = () => {
  return (
    <section className="text-center">
      <h1 className="text-center text-5xl md:text-6xl mb-[40px]">
        Nuestras Pizzas
      </h1>

      <h2 className="mb-5">Conoce nuestra variedad de pizzas caseras</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
        {pizzas.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza.name} />
        ))}
      </div>
    </section>
  );
};

export default Products;

const pizzas = [
  {
    name: "Muzzarella",
    ingredients: "Salsa de tomate, muzzarella y aceitunas",
    picture: Muzarella,
  },
  {
    name: "Doble Muzzarella",
    ingredients: "Salsa de tomate y doble porción de muzzarella",
    picture: DobleMuzza,
  },
  {
    name: "Fugazzetta",
    ingredients: "Muzzarella, cebolla y orégano",
    picture: Fugazetta,
  },
  {
    name: "Jamón",
    ingredients: "Salsa de tomate, muzzarella y jamón",
    picture: Jamon,
  },
  {
    name: "Jamón y Morrón",
    ingredients: "Salsa de tomate, muzzarella, jamón y morrones",
    picture: JamonYMorrones,
  },
  {
    name: "Napolitana",
    ingredients: "Salsa de tomate, muzzarella, rodajas de tomate y ajo",
    picture: Napolitana,
  },
  {
    name: "Calabresa",
    ingredients: "Salsa de tomate, muzzarella y longaniza",
    picture: Calabresa,
  },
  {
    name: "Rúcula",
    ingredients: "Salsa de tomate, muzzarella y rúcula",
    picture: Rucula,
  },
];

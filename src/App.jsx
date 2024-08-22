import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import Products from "./views/Products";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappButton";

export const appRoutes = [
  { name: "Home", path: "/", component: <Home /> },
  { name: "Pizzas", path: "/pizzas", component: <Products /> },
  { name: "Contacto", path: "/contact", component: <Contact /> },
];

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-[100vh] bg-darkGray">
        <Header />
        <Routes>
          {appRoutes.map((r) => (
            <Route key={r.name} path={r.path} element={r.component} />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <WhatsappIcon/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

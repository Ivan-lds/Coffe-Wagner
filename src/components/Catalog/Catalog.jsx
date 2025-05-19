import React from "react";
import { Link } from "react-router-dom";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import "./Catalog.css";

const Catalog = () => {
  const coffeeItems = [
    {
      id: 1,
      image: "/assets/c1.webp",
      title: "Café Filtrado",
      description:
        "Nosso café filtrado é preparado com grãos especiais, oferecendo um sabor suave e complexo. Ideal para quem aprecia a pureza do café.",
      price: "R$ 10,00",
    },
    {
      id: 2,
      image: "/assets/c2.jpg",
      title: "Espresso",
      description:
        "Espresso intenso e aromático, extraído na medida certa para realçar suas notas amargas e aveludadas.",
      price: "R$ 8,00",
    },
    {
      id: 3,
      image: "/assets/c3.jpeg",
      title: "Latte",
      description:
        "Latte cremoso e equilibrado, com leite vaporizado e espresso macio. Personalize com seus sabores favoritos.",
      price: "R$ 13,00",
    },
    {
      id: 4,
      image: "/assets/c4.jpeg",
      title: "Cappuccino",
      description:
        "Cappuccino clássico com espuma cremosa e um toque de canela. Uma combinação perfeita para todas as horas.",
      price: "R$ 12,00",
    },
    {
      id: 5,
      image: "/assets/c5.jpg",
      title: "Mocha",
      description:
        "Mocha irresistível com chocolate derretido e espresso intenso. Uma explosão de sabor para os amantes de chocolate.",
      price: "R$ 14,00",
    },
    {
      id: 6,
      image: "/assets/c6.jpeg",
      title: "Caramel Macchiato",
      description:
        "Caramel Macchiato com camadas de espresso, leite vaporizado e caramelo. Doce e cremoso, uma verdadeira indulgência.",
      price: "R$ 15,00",
    },
    {
      id: 7,
      image: "/assets/c7.webp",
      title: "Café com Especiarias",
      description:
        "Experimente nosso café com especiarias, uma mistura aromática de cardamomo, gengibre e canela.",
      price: "R$ 12,00",
    },
    {
      id: 8,
      image: "/assets/c8.jpg",
      title: "Café com Frutas",
      description:
        "Refrescante café com frutas vermelhas, perfeito para os dias quentes.",
      price: "R$ 13,00",
    },
  ];

  return (
    <section id="catalogo" className="catalogo">
      <div className="catalog-header">
        <h2>NOSSO CATÁLOGO</h2>
        <p className="catalog-subtitle">
          Descubra nossa seleção de cafés premium
        </p>
      </div>

      <div className="catalog-container">
        {coffeeItems.map((item) => (
          <CoffeeItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <div className="catalog-footer">
        <Link to="/saiba-mais" className="saiba-mais-btn">
          Saiba mais sobre nossos cafés
        </Link>
      </div>
    </section>
  );
};

export default Catalog;

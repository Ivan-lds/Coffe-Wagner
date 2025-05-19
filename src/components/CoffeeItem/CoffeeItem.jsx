import React from "react";
import "./CoffeeItem.css";

const CoffeeItem = ({ image, title, description, price }) => {
  const handleBuyClick = () => {
    // Redirect to a coffee selling website
    window.open("https://www.starbucks.com.br/menu/bebidas/cafe", "_blank");
  };

  return (
    <div className="coffee-card">
      <div className="coffee-image-container">
        <img className="img-catalogo" src={image} alt={title} />
      </div>
      <div className="coffee-content">
        <h3 className="coffee-title">{title}</h3>
        <p className="coffee-description">{description}</p>
        <div className="coffee-footer">
          <span className="coffee-price">{price}</span>
          <button className="buy-button" onClick={handleBuyClick}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItem;

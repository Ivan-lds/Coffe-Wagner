import React from 'react';
import Navbar from '../Navbar/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <Navbar />
      <section className="content">
        <div className="text">
          <h1>Especialista em cafés <br /> gourmets</h1>
          <p className="p-descricao">
            Desperte seus sentidos com o café que transforma sua rotina em um ritual de prazer. 
            Feito com grãos selecionados e um toque de perfeição, cada pedido no nosso e-commerce 
            é uma experiência única, do aroma irresistível ao sabor incomparável. 
            Surpreenda-se e eleve seus momentos com o melhor café que você já provou!
          </p>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;

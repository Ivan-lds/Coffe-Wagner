import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./SaibaMais.css";

const SaibaMais = () => {
  const coffeeInfo = [
    {
      id: 1,
      title: "Nossos Grãos",
      description:
        "Selecionamos apenas os melhores grãos de café, cultivados em regiões específicas do Brasil e do mundo. Nossos produtores seguem práticas sustentáveis e éticas, garantindo um produto de alta qualidade e responsabilidade socioambiental.",
      image: "/assets/c1.webp",
    },
    {
      id: 2,
      title: "Processo de Torra",
      description:
        "Nosso processo de torra é meticulosamente controlado para realçar as características únicas de cada tipo de grão. Utilizamos equipamentos de última geração e técnicas artesanais para garantir o ponto ideal de torra, preservando aromas e sabores.",
      image: "/assets/c2.jpg",
    },
    {
      id: 3,
      title: "Métodos de Preparo",
      description:
        "Oferecemos diversos métodos de preparo, desde o tradicional espresso até métodos filtrados como V60, Chemex e Aeropress. Cada método destaca diferentes características do café, proporcionando experiências sensoriais únicas.",
      image: "/assets/c3.jpeg",
    },
    {
      id: 4,
      title: "Harmonização",
      description:
        "Nossos baristas são especialistas em harmonização e podem recomendar o café perfeito para acompanhar diferentes momentos e alimentos. Descubra combinações surpreendentes que elevam a experiência de degustação.",
      image: "/assets/c4.jpeg",
    },
  ];

  const coffeeOrigins = [
    {
      id: 1,
      region: "Sul de Minas",
      characteristics:
        "Notas de chocolate, caramelo e nozes, com acidez média e corpo encorpado.",
      altitude: "900-1.400m",
    },
    {
      id: 2,
      region: "Cerrado Mineiro",
      characteristics:
        "Sabor adocicado com notas de caramelo, corpo médio e acidez baixa.",
      altitude: "800-1.300m",
    },
    {
      id: 3,
      region: "Chapada Diamantina",
      characteristics:
        "Notas frutadas e florais, acidez cítrica e corpo leve a médio.",
      altitude: "1.000-1.300m",
    },
    {
      id: 4,
      region: "Mogiana Paulista",
      characteristics:
        "Doçura acentuada, notas de chocolate e frutas vermelhas, corpo médio.",
      altitude: "900-1.100m",
    },
  ];

  return (
    <div className="saiba-mais-page">
      <Navbar />

      <div className="saiba-mais-hero">
        <h1>Conheça Mais Sobre Nossos Cafés</h1>
        <p>
          Descubra o universo do café especial e como selecionamos e preparamos
          nossas bebidas
        </p>
      </div>

      <section className="coffee-info-section">
        <h2>Nossa Paixão pelo Café</h2>

        <div className="coffee-info-container">
          {coffeeInfo.map((info) => (
            <div key={info.id} className="coffee-info-card">
              <div className="info-image-container">
                <img src={info.image} alt={info.title} />
              </div>
              <div className="info-content">
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="coffee-origins-section">
        <h2>Origens dos Nossos Cafés</h2>
        <p className="origins-intro">
          Trabalhamos com cafés de diferentes regiões produtoras, cada uma com
          características únicas que influenciam no sabor final da bebida:
        </p>

        <div className="origins-table-container">
          <table className="origins-table">
            <thead>
              <tr>
                <th>Região</th>
                <th>Características</th>
                <th>Altitude</th>
              </tr>
            </thead>
            <tbody>
              {coffeeOrigins.map((origin) => (
                <tr key={origin.id}>
                  <td>{origin.region}</td>
                  <td>{origin.characteristics}</td>
                  <td>{origin.altitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="brewing-tips-section">
        <h2>Dicas de Preparo</h2>
        <div className="brewing-tips-content">
          <div className="brewing-tip">
            <h3>Temperatura da Água</h3>
            <p>
              A temperatura ideal para extração do café é entre 90°C e 96°C.
              Água muito quente pode extrair compostos amargos indesejados.
            </p>
          </div>
          <div className="brewing-tip">
            <h3>Moagem</h3>
            <p>
              Ajuste a moagem de acordo com o método: mais fina para espresso,
              média para coador e mais grossa para prensa francesa.
            </p>
          </div>
          <div className="brewing-tip">
            <h3>Proporção</h3>
            <p>
              Recomendamos a proporção de 1:15 a 1:17 (café:água) para métodos
              filtrados, ajustando conforme sua preferência de intensidade.
            </p>
          </div>
          <div className="brewing-tip">
            <h3>Armazenamento</h3>
            <p>
              Guarde o café em recipiente hermético, longe de luz, calor e
              umidade. Prefira comprar em pequenas quantidades para consumo em
              até 30 dias.
            </p>
          </div>
        </div>
      </section>

      <div className="back-to-catalog">
        <Link to="/" className="back-button">
          Voltar para o Catálogo
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default SaibaMais;

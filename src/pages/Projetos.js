import { useState } from "react";
import Card from "../components/Card";

import ClimaApp from "../img/climaApp.PNG";
import moviesLib from "../img/moviesLib.PNG";

import "./Projetos.css";

const Projetos = () => {
  const [corDaProjetos, setCorDaProjetos] = useState("#333");

  const trocarCorDaProjetos = (novaCor) => {
    setCorDaProjetos(novaCor);
  };
  const cards = [
    {
      id: 1,
      nome: "Clima App",
      color: "#666",
      img: ClimaApp,
      link: "https://climate-app-nine.vercel.app",
      gitHub: "https://github.com/Thiago31fb/climate-app",
      descricao: "",
    },
    {
      id: 2,
      nome: "moviesLib",
      color: "#7a541c",
      img: moviesLib,
      link: "https://thiago31fb.github.io/MoviesLib/",
      gitHub: "https://github.com/Thiago31fb/MoviesLib",
      descricao: "",
    },
  ];
  return (
    <div className="Projetos" style={{ background: corDaProjetos }}>
      <div className="container">
        {cards.map((card) => (
          <Card
            key={card.id}
            dados={card}
            trocarCorDaProjetos={trocarCorDaProjetos}
          />
        ))}
      </div>
    </div>
  );
};

export default Projetos;

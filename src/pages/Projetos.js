import { useState } from "react";
import Card from "../components/Card";

import "./Projetos.css";
import useFetch from "../useFetch";

const Projetos = () => {
  const [corDaProjetos, setCorDaProjetos] = useState("var(--back-light)");

  const trocarCorDaProjetos = (novaCor) => {
    setCorDaProjetos(novaCor);
  };

  const {
    data: data,
    isPending,
    error,
  } = useFetch("https://json-server-neon-omega.vercel.app/showProjects/");

  return (
    <div className="Projetos" style={{ background: corDaProjetos }}>
      <h3>Meus Principais projetos</h3>
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div className="loading">Carregando...</div>}
        {data &&
          data.map((card) => (
            <Card
              key={card.id}
              dados={card}
              trocarCorDaProjetos={trocarCorDaProjetos}
            />
          ))}
      </div>
      <p className="textEmBreve">Em breve mais projetos!</p>
    </div>
  );
};

export default Projetos;

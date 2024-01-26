import {  useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "./DetalhesProjeto.css";
import { FaLink, FaGithub } from "react-icons/fa";
const DetalhesProjeto = () => {
  const { id } = useParams();
  const {
    data: dados,
    isPending,
    error,
  } = useFetch("https://json-server-neon-omega.vercel.app/showProjects/" + id);

  console.log(dados);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Carregando...</div>}
      {dados && (
        <div className="detalhesProjeto">
          <h2>{dados.nome}</h2>
          <div className="containerDetalhes">
            <div>
              <p>
                <span>Descrição: </span>
                {dados.descricao}
              </p>
              <ul className="links">
                <li>
                  <a href={dados.gitHub} target="blank">
                    Repositório <FaGithub />
                  </a>
                </li>
                <li>
                  <a href={dados.link} target="blank">
                    Link do site <FaLink />
                  </a>
                </li>
              </ul>
            </div>
            <img src={dados.img} alt={dados.nome} />
          </div>
          <h2>Principais funcionalidades</h2>
          <ul className="funcionalidades">
            {dados.funcionalidades.map((funcionalidade, index) => (
              <li>
                <span>{funcionalidade.tipo}: </span>
                {funcionalidade.comoUsar}.
              </li>
            ))}
          </ul>
          <h2>Tecnologias usadas</h2>
          <div className="detalhesTecnologias">
            {dados.tecnologias.map((tecnologia, index) => (
              <img key={index} alt={tecnologia.nome} src={tecnologia.link} />
            ))}
          </div>

        </div>
      )}
    </>
  );
};

export default DetalhesProjeto;

import Card from "../components/Card";
import perfil from "../img/perfil.PNG";
import useFetch from "../useFetch";
// import ClimaApp from "../img/climaApp.PNG";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: data,
    isPending,
    error,
  } = useFetch("https://json-server-neon-omega.vercel.app/showProjects/1");

  return (
    <div className="home">
      <div className="SobrerContainer">
        <div className="containerHome">
          <div className="perfilInfo">
            <h3>Thiago Ferreira Barcelo</h3>
            <h4>PROGRAMADOR</h4>

            <p>
              Tive a oportunidade de estagiar na Prodemge, interagi com sistemas
              cruciais do governo. Participei do levantamento de custos para o
              desenvolvimento do serviço de nuvem. Agora, busco aprimorar minhas
              habilidades na área de front-end, concentrando-me em tecnologias
              como React, Angular e TypeScript. Meu objetivo é ampliar meu
              conhecimento técnico e aplicá-lo de forma inovadora neste campo
              dinâmico.
            </p>
          </div>
          <img className="fotoPerfil" src={perfil} alt="Foto" />
        </div>
        <h3>Tecnologias!</h3>
        <div className="tecnologias">
          <img
            alt="React"
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          />
          <img
            alt="Angular"
            src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
          />
          <img
            alt="GitHub"
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
          />
          <img
            alt="JavaScript"
            src="	https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
          />
          <img
            alt="PHP"
            src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
          />
          <img
            alt="MySQL"
            src="	https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
          />
        </div>
        <div className="containerHome">
          <div className="projetos">
            <h3>Projeto em destaque</h3>
            {error && <div>{error}</div>}
            {isPending && <div className="loading">Carregando...</div>}
            {data && <Card dados={data} trocarCorDaProjetos="" />}
            <Link className="projetosLink" to={"projetos"}>
              Exibir Todos os Projetos
            </Link>
          </div>
          <div className="formacao">
            <h3>FORMAÇÃO ACADÊMICA</h3>
            <div className="cardFormacao">
              <h4>Ensino Médio</h4>
              <p>
                <span>Conclusão: </span>Dezembro 2018
              </p>
              <p>
                <span>Instituição de ensino: </span> E. E Madre Carmelita
              </p>
            </div>
            <div className="cardFormacao">
              <h4>Cursando: ADS (Análise e Desenvolvimento de Sistemas)</h4>
              <p>
                <span>Conclusão: </span> prevista para 2024
              </p>
              <p>
                <span>Período: </span> 5º
              </p>
              <p>
                <span>Instituição de ensino: </span>Centro Universitário Estácio
                de Sá - Unidade Prado / Belo Horizonte
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

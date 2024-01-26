import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ dados, trocarCorDaHome }) => {
  const handleCardClick = () => {
    // Chama a função passada como propriedade
    if (trocarCorDaHome) {
      trocarCorDaHome(dados.color);
    }
  };
  console.log(dados)
  return (
    <div className="desc">
      <div
        className="box"
        data-color={dados.color}
        onMouseEnter={handleCardClick}
      >
        <div className="imgBox">
          <img src={dados.img} alt={dados.nome} />
        </div>
        <div className="glass">
          <h3>
            {dados.nome}
            <br/>
            <samp></samp>
          </h3>
          <ul>
            <a href={dados.link} target="blank">
              Visitar Site
            </a>
          </ul>
        </div>
      </div>
      <div className="about">
        <h2>{dados.nome}</h2>
        <p>{dados.descricao}</p>
        
        {dados.tecnologias.map((tecnologia, index) => (
          <img key={index} alt={tecnologia.nome} src={tecnologia.link} />
        ))}

        
          <Link to={`/projetos/${dados.id}`}>Mais informações</Link>
        
      </div>
    </div>
  );
};

export default Card;

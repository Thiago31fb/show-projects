import "./Card.css";

const Card = ({ dados, trocarCorDaHome }) => {
  const handleCardClick = () => {
    // Chama a função passada como propriedade
    if (trocarCorDaHome) {
      trocarCorDaHome(dados.color);
    }
  };
  return (
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
          <br />
          <samp>teste</samp>
        </h3>
        <ul>
          <a href={dados.link} target="blank">
            Visitar Site
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Card;

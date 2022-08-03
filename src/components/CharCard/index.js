import "./style.css";

function CharCard({ personagem }) {
  return (
    <>
      {personagem.status === "Alive" ? (
        <div className="caixa alive" key={personagem.id}>
          <h1 className="textalive">{personagem.name.substring(0, 16)}</h1>
          {/* <p>{personagem.species}</p> */}
          <img src={personagem.image} alt={personagem.name}></img>
        </div>
      ) : (
        <div className="caixa dead" key={personagem.id}>
          <h1 className="textdead">{personagem.name.substring(0, 16)}</h1>
          {/* <p>{personagem.species}</p> */}
          <img src={personagem.image} alt={personagem.name}></img>
        </div>
      )}
    </>
  );
}

export default CharCard;

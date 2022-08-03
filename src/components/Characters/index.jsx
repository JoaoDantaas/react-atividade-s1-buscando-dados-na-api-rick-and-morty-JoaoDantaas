import CharCard from "../CharCard";
import "./style.css";

function Characters({ characterList }) {
  return (
    <>
      <div className="header">Meus personagens</div>
      <ul>
        {characterList.map((personagem) => {
          return <CharCard key={personagem.id} personagem={personagem} />;
        })}
      </ul>
    </>
  );
}

export default Characters;

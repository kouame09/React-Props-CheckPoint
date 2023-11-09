import React from "react";
import Player from "./player"; 
import players from "./players"; 

const PlayersList = () => {
  return (
    <div className="players">
      {players.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;

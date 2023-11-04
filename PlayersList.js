import React from "react";
import Player from "./player.js"; 
import players from "./players.js"; 

const PlayersList = () => {
  return (
    <div>
      {players.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;

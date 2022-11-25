import React, { useState } from "react";
import "./App.css";
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';


function App() {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);
  return (
    <div className="App">
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
        {pokemons.map(pokemon => (
          <p>{pokemon.name}</p>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;

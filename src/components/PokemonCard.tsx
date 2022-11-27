import React, { FunctionComponent, useState } from 'react'
import Pokemon from '../models/pokemon'
import "./pokemonCard.css"

type Props = {
  pokemon: Pokemon
  borderColor?: string
};

const PokemonCard:FunctionComponent<Props> = ({pokemon, borderColor = "green"}) => {

  const [color, setcolor] = useState<string>()

  const showBorder = () => {
    setcolor(borderColor)
  }

  const hideBorder = () => {
    setcolor("#f5f5f5")
  }

  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder} >
      <div className="card horizontal" style={{ borderColor: color}}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{pokemon.created.toString()}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard

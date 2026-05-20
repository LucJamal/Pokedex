import PokemonCard from './PokemonCard'
import { useState } from 'react'
import { POKEMONS } from '../data/pokemons'



function PokemonList() {
  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <section className="pokemon-catalog">
      <div className="pokemon-catalog__head">
        <h2 className="pokemon-catalog__title">Catálogo de Pokémon</h2>
        <div className="pokemon-toolbar">
          <label htmlFor="busca">Buscar por nome:</label>
          <input
            id="busca"
            type="search"
            className="pokemon-search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Ex.: Pikachu"
          />
        </div>
      </div>

      {listaFiltrada.length === 0 ? (
        <p className="pokemon-catalog__empty">Nenhum Pokémon encontrado para esta busca.</p>
      ) : (
        <div className="pokemon-grid">
          {listaFiltrada.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PokemonList

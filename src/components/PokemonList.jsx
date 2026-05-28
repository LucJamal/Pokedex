import PokemonCard from './PokemonCard'
import { useState, useEffect } from 'react'
import { fetchPokemonList } from '../services/pokemonApi'

function PokemonList() {
  const [filtro, setFiltro] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadPokemons() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchPokemonList(20)
        if (!cancelled) setPokemons(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadPokemons()
    return () => { cancelled = true }
  }, [])

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

      {loading && <p>Carregando Pokémon...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && listaFiltrada.length === 0 && (
        <p>Nenhum Pokémon encontrado.</p>
      )}
      {!loading && !error && listaFiltrada.length > 0 && (
        <div className="pokemon-grid">
          {listaFiltrada.map(pokemon => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      )}
    </section>
  )
}

export default PokemonList

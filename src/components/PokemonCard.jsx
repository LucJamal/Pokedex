import { Link } from 'react-router-dom'

function PokemonCard({ id, name, type, imageUrl }) {
  return (

  <Link to={`/pokemon/${id}`}>
    <div className="pokemon-card">
      <div className="pokemon-card__media">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="pokemon-card__body">
        <h2>#{String(id).padStart(3, '0')} — {name}</h2>
        <p className="pokemon-card__type">
          <span>{type}</span>
        </p>
      </div>
    </div>
  </Link>
  )
}

export default PokemonCard

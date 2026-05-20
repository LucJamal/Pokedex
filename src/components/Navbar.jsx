import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="site-nav">
     <div>
       <NavLink to = "/" end>Início</NavLink>
       <NavLink to = "/pokemon">Pokémon</NavLink>
       <NavLink to = "/sobre">Sobre</NavLink>
      </div>
    </nav>
  )
}

export default Navbar

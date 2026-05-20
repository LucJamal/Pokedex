import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import Footer from './components/Footer'
import HomePage from './pages/homePage'
import PokemonDetailPage from './pages/PokemonDetailPage'
import AboutPage from './pages/AboutPage'


function App() {
  return (
    <div className="app">
      <div className="site-shell">
        <Header />
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path ="/pokemon" element = {<PokemonList />} />
            <Route path="/sobre" element = {<AboutPage />} />
            <Route path = "/pokemon/:id" element = {<PokemonDetailPage />} />
          </Routes>
      </main>
      </div>
      <Footer />
    </div>
  )
}

export default App

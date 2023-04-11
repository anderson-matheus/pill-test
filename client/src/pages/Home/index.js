import React from "react"
import { Link } from "react-router-dom"
import './styles.css'

function Home() {
    return (
      <div class="home">
        <Link className="btn-matches" to="matches">Clique para ver os jogos da rodada</Link>
      </div>
    )
}

export default Home
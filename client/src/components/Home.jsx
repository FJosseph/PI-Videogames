import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Games from "./Games";
import { getGames, getGenres } from "../actions";
import Paginado from "./Paginado";
import './home.css'

export default function Home() {
    const dispatch = useDispatch()
    const videogames = useSelector(state=>state.videogames)
    const gamesSearched = useSelector(state => state.gamesSearched)
    const [páginaActual, setPáginaActual] = useState(1)
    const [gamesPágina, setGamesPágina] = useState(15)
    const indexLast = páginaActual * gamesPágina
    const indexFirst = indexLast - gamesPágina
    const gamesActuales = videogames.slice(indexFirst, indexLast)
    const paginado = (pageNumber)=>{
        setPáginaActual(pageNumber)
    }
    useEffect(()=>{
       !videogames.length && dispatch(getGames())
       dispatch(getGenres())
    }, [dispatch])
    return (
        <section id="container">
            <Paginado allGames={videogames.length} gamesPágina={gamesPágina} paginado={paginado}/>
            {videogames.length?<Games games={gamesActuales}/>:<div style={{height:"100vh", color: "white"}}>'Sin resultados por el momento...'</div>
            }
        </section>
    )
}

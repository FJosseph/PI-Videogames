import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Games from "./Games";
import { getGames } from "../actions";
import Paginado from "./Paginado";

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
        dispatch(getGames())
    }, [dispatch])
    return (
        <section id="container">
            <Paginado allGames={gamesSearched.length?gamesSearched.length:videogames.length} gamesPágina={gamesPágina} paginado={paginado}/>
            {gamesSearched.length?<Games games={gamesSearched}/>:<Games games={gamesActuales}/>
            }
        </section>
    )
}

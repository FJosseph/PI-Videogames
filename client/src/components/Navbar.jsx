import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './navbar.css'
import { filterByCreated, filterGameByGenre, getGamesBySearch, sortAlfabéticamente, sortByRating } from "../actions";
const NavBar = ()=>{
    const [input, setInput] = useState('')
    const [oder, setOrder] = useState('')
    const [alfb, setAlfb] = useState('')
    const dispatch = useDispatch()
    function handleChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getGamesBySearch(input))
        setInput('')
    }

    function handleFilterGenre(e) {
        // e.preventDefault()
        dispatch(filterGameByGenre(e.target.value))
    }

    function handleFilterCreated(e) {
        dispatch(filterByCreated(e.target.value))        
    }

    function handleOrderByRating(e) {
        dispatch(sortByRating(e.target.value))
        setOrder(`Order by ${e.target.value}`) // Para el renderizado
    }
    
    function handleAlfabeto(e) {
        dispatch(sortAlfabéticamente(e.target.value))        
        setAlfb(`Order by ${e.target.value}`)
    }
    return (
        <header className="navbar">
            <div id="created">
            <Link to='/addGame'>
                Crear Game
            </Link>
            </div>
            <nav>
            <ul className="list-navbar">
                <li>
                    <select name="genres" onChange={e=> handleFilterGenre(e)}>
                        <option value="Todos">Todos los géneros</option>
                        <option value="Action">Action</option>
                        <option value="Indie">Indie</option>
                        <option value="Adventure">Adventure</option>
                        <option value="RPG">RPG</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Shooter">Shotter</option>
                        <option value="Casual">Casual</option>
                        <option value="Simulation">Simulation</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Arcade">Arcade</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Racing">Racing</option>
                        <option value="Massively Multiplayer">Massively Multiplayer</option>
                        <option value="Sports">Sports</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Family">Family</option>
                        <option value="Board Games">Board Games</option>
                        <option value="Educational">Educational</option>
                        <option value="Card">Card</option>
                    </select>
                </li>
                <li>
                    <select name="rating" onChange={e=>handleOrderByRating(e)}>
                        <option value="Todos">Todos por rating</option>
                        <option value="mayor">Ascedente</option>
                        <option value="menor">Descendente</option>
                    </select>
                </li>
                <li>
                    <select name="alfabéticamente" onChange={e=>handleAlfabeto(e)}>
                        <option value="Todos">Todos por alfabeto</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </li>
                <li>
                    <select name="created" onChange={e=>handleFilterCreated(e)}>
                        <option value="Todos">Todos</option>
                        <option value="creados">Creados</option>
                        <option value="existentes">Existentes</option>
                    </select>
                </li>
                <form onSubmit={handleSubmit}>
                <li><input value={input} type="text" onChange={handleChange} placeholder="search..."/></li>
                <li><input type="submit" value="Buscar"/></li>
                </form>
            </ul>
            </nav>
        </header>
    )
}
export default NavBar
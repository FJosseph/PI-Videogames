import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './navbar.css'
import { getGamesBySearch } from "../actions";
const NavBar = ()=>{
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    function handleChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getGamesBySearch(input))
        setInput('')
    }
    return (
        <header className="navbar">
            <div id="created">
            <Link to='/crearGame'>
                Crear Game
            </Link>
            </div>
            <nav>
            <ul className="list-navbar">
                <li>
                    <select name="género">
                        <option value="Todos">Todos los géneros</option>
                        <option value="Action">Action</option>
                        <option value="Indie">Indie</option>
                        <option value="Adventure">Adventure</option>
                        <option value="RPG">RPG</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Shotter">Shotter</option>
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
                    <select name="rating">
                        <option value="Todos">Todos</option>
                        <option value="mayor">Mayor</option>
                        <option value="menor">Menor</option>
                    </select>
                </li>
                <li>
                    <select name="created">
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
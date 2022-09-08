import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGame } from "../actions";
import './form.css'
const FormAdd = ()=>{
    const [input, setInput] = useState({
        name: "",
        description: "",
        fecha_lanzamiento: '',
        rating: '',
        plataformas: ["PS4"],
        genres: []
    })

    const [genres, setGenres] = useState({
        'Action': false,
        'Indie': false,
        'Adventure': false,
        'RPG': false,
        'Strategy': false,
        'Shooter': false,
        'Casual': false,
        'Simulation': false,
        'Puzzle': false,
        'Arcade': false,
        'Platformer': false,
        'Racing': false,
        'Massively Multiplayer': false,
        'Sports': false,
        'Fighting': false,
        'Family': false,
        'Board Games': false,
        'Educational': false,
        'Card':false
    })
    const [plataformas, setPlataformas] = useState({
        'Playstation':false,
        'Xbox': false,
        'PC': false,
        'Nintendo': false
    })
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(addGame(input))
    // },[])
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleCheckBox(e) {
        setGenres({
            ...genres,
            [e.target.value]: e.target.checked
        })
    }
    function handlePlataformas(e) {
        setPlataformas({
            ...plataformas,
            [e.target.value]: e.target.checked
        })
    }
    useEffect(()=>{
        let genresFilter = Object.keys(genres).filter(g=>genres[g] === true)
        console.log(genresFilter);
        let platformsFilter = Object.keys(plataformas).filter(p=>plataformas[p] === true)
        setInput({
            ...input,
            genres: genresFilter,
            plataformas: platformsFilter
        })
    },[genres, plataformas])
    return (
        <div id="form-add">
            <form action="post">
                <input name='name' value={input.name} type="text" onChange={handleInputChange} placeholder="Nombre"/>
                <input name="description" value={input.description} onChange={handleInputChange} type="text" placeholder="Descripción"/>
                <input name="fecha_lanzamiento" value={input.fecha_lanzamiento} onChange={handleInputChange} type="date" placeholder="fecha de lanzamiento"/>
                <input name='rating' value={input.rating} onChange={handleInputChange} type="number" placeholder="Rating" max='5'min='0'/>
                <label>Elige los géneros:</label>
                    <div>
                        <input checked={genres.Action} type='checkbox' onChange={handleCheckBox} value="Action"/>
                        <input checked={genres.Indie} type='checkbox' onChange={handleCheckBox} value="Indie"/>
                        <input checked={genres.Adventure} type='checkbox' onChange={handleCheckBox} value="Adventure"/>
                        <input checked={genres.RPG} type='checkbox' onChange={handleCheckBox} value="RPG"/>
                        <input checked={genres.Strategy} type='checkbox' onChange={handleCheckBox} value="Strategy"/>
                        <input checked={genres.Shooter} type='checkbox' onChange={handleCheckBox} value="Shooter"/>
                        <input checked={genres.Casual} type='checkbox' onChange={handleCheckBox} value="Casual"/>
                        <input checked={genres.Simulation} type='checkbox' onChange={handleCheckBox} value="Simulation"/>
                        <input checked={genres.Puzzle} type='checkbox' onChange={handleCheckBox} value="Puzzle"/>
                        <input checked={genres.Arcade} type='checkbox' onChange={handleCheckBox} value="Arcade"/>
                        <input checked={genres.Platformer} type='checkbox' onChange={handleCheckBox} value="Platformer"/>
                        <input checked={genres.Racing} type='checkbox' onChange={handleCheckBox} value="Racing"/>
                        <input checked={genres['Massively Multiplayer']} type='checkbox' onChange={handleCheckBox} value="Massively Multiplayer"/>
                        <input checked={genres.Sports} type='checkbox' onChange={handleCheckBox} value="Sports"/>
                        <input checked={genres.Fighting} type='checkbox' onChange={handleCheckBox} value="Fighting"/>
                        <input checked={genres.Family} type='checkbox' onChange={handleCheckBox} value="Family"/>
                        <input checked={genres["Board Games"]} type='checkbox' onChange={handleCheckBox} value="Board Games"/>
                        <input checked={genres.Educational} type='checkbox' onChange={handleCheckBox} value="Educational"/>
                        <input checked={genres.Card} type='checkbox' onChange={handleCheckBox} value="Card"/>
                    </div>
                <label>Elige las plataformas:</label>
                    <div>
                        <input checked={plataformas.Playstation} type='checkbox' onChange={handlePlataformas} value="Playstation"/>
                    </div>
            </form>
        </div>
    )
}
export default FormAdd
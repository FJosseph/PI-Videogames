import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGame, getGames } from "../actions";
import { useHistory } from 'react-router-dom'
import './form.css'

export function validate(input) {
        let errors = {}
        if(!input.name) errors.name = 'Name is required';
        if(!input.description) errors.description = 'Description is required'
        if(!input.rating) errors.rating = 'Rating is required'
        if(input.rating > 5 || input.rating < 0) errors.rating = 'Rating is out of range'
        // if(!input.plataformas.length) errors.plataformas = 'Plataformas is required'
        // if(!input.genres.length) errors.plataformas = 'Genres is required'
        return errors
}

const FormAdd = ()=>{
    const navigate = useHistory()
    const [input, setInput] = useState({
        name: "",
        description: "",
        fecha_lanzamiento: '',
        rating: '',
        plataformas: [],
        genres: [],
        // precio: ''
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
        'Nintendo': false,
        'Android': false
    })

    const [errores, setErrors] = useState({})
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(addGame(input))
    // },[])
    function handleInputChange(e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))

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
    function handleSubmit(e) {
        e.preventDefault()
        if(!input.genres.length || !input.plataformas.length || Object.keys(errores).length)alert('Faltan agregar campos')
        else {
            dispatch(addGame(input))
            alert('??Videogame creado satisfactoriamente!')
            navigate.push('/home')
            dispatch(getGames())
        }
        // setInput({
        //     name: "",
        //     description: "",
        //     fecha_lanzamiento: '',
        //     rating: '',
        //     plataformas: [],
        //     genres: []
        // })
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
            <form onSubmit={handleSubmit}>
                ??A??ade un videogame!
                <input name='name' value={input.name} type="text" onChange={handleInputChange} placeholder="Nombre*" required/>
                {errores.name && (<p>{errores.name}</p>)}
                <input name="description" value={input.description} onChange={handleInputChange} type="text" placeholder="Descripci??n*" required/>
                {errores.description && (<p>{errores.description}</p>)}
                <input name="fecha_lanzamiento" value={input.fecha_lanzamiento} onChange={handleInputChange} type="date" placeholder="fecha de lanzamiento" required/>
                {errores.fecha_lanzamiento && (<p>{errores.fecha_lanzamiento}</p>)}
                <input name='rating' value={input.rating} onChange={handleInputChange} type="number" placeholder="Rating" max='5'min='0' required/>
                {errores.rating && (<p>{errores.rating}</p>)}
                {/* <input name='precio' value={input.precio} onChange={handleInputChange} type="number" placeholder="Precio" max='200'min='0' required/> */}
                <label>Elige los g??neros:</label>
                    <div className="checkbox">
                        {/* {Object.keys(genres).map(x=>{
                            return (<><input checked={genres[x]} type='checkbox' onChange={handleCheckBox} value={`${x}`} id={`${x}`}/>
                            <label htmlFor={`${x}`}>{x}</label></>)
                        })} */}
                        <input checked={genres.Action} type='checkbox' onChange={handleCheckBox} value="Action" id="Action"/>
                        <label htmlFor="Action">Action</label>
                        <input checked={genres.Indie} type='checkbox' onChange={handleCheckBox} value="Indie" id="Indie"/>
                        <label htmlFor="Indie">Indie</label>
                        <input checked={genres.Adventure} type='checkbox' onChange={handleCheckBox} value="Adventure" id="Adventure"/>
                        <label htmlFor="Adventure">Adventure</label>
                        <input checked={genres.RPG} type='checkbox' onChange={handleCheckBox} value="RPG" id="RPG"/>
                        <label htmlFor="RPG">RPG</label>
                        <input checked={genres.Strategy} type='checkbox' onChange={handleCheckBox} value="Strategy" id="Strategy"/>
                        <label htmlFor="Strategy">Strategy</label>
                        <input checked={genres.Shooter} type='checkbox' onChange={handleCheckBox} value="Shooter" id="Shooter"/>
                        <label htmlFor="Shooter">Shooter</label>
                        <input checked={genres.Casual} type='checkbox' onChange={handleCheckBox} value="Casual" id="Casual"/>
                        <label htmlFor="Casual">Casual</label>
                        <input checked={genres.Simulation} type='checkbox' onChange={handleCheckBox} value="Simulation" id="Simulation"/>
                        <label htmlFor="Simulation">Simulation</label>
                        <input checked={genres.Puzzle} type='checkbox' onChange={handleCheckBox} value="Puzzle" id="Puzzle"/>
                        <label htmlFor="Puzzle">Puzzle</label>
                        <input checked={genres.Arcade} type='checkbox' onChange={handleCheckBox} value="Arcade" id="Arcade"/>
                        <label htmlFor="Arcade">Arcade</label>
                        <input checked={genres.Platformer} type='checkbox' onChange={handleCheckBox} value="Platformer" id="Platformer"/>
                        <label htmlFor="Platformer">Platformer</label>
                        <input checked={genres.Racing} type='checkbox' onChange={handleCheckBox} value="Racing" id="Racing"/>
                        <label htmlFor="Racing">Racing</label>
                        <input checked={genres['Massively Multiplayer']} type='checkbox' onChange={handleCheckBox} value="Massively Multiplayer" id="Massively Multiplayer"/>
                        <label htmlFor="Massively Multiplayer">Massively Multiplayer</label>
                        <input checked={genres.Sports} type='checkbox' onChange={handleCheckBox} value="Sports" id="Sports"/>
                        <label htmlFor="Sports">Sports</label>
                        <input checked={genres.Fighting} type='checkbox' onChange={handleCheckBox} value="Fighting" id="Fighting"/>
                        <label htmlFor="Fighting">Fighting</label>
                        <input checked={genres.Family} type='checkbox' onChange={handleCheckBox} value="Family" id="Family"/>
                        <label htmlFor="Family">Family</label>
                        <input checked={genres["Board Games"]} type='checkbox' onChange={handleCheckBox} value="Board Games" id="Board Games"/>
                        <label htmlFor="Board Games">Board Games</label>
                        <input checked={genres.Educational} type='checkbox' onChange={handleCheckBox} value="Educational" id="Educational"/>
                        <label htmlFor="Educational">Educational</label>
                        <input checked={genres.Card} type='checkbox' onChange={handleCheckBox} value="Card" id="Card"/>
                        <label htmlFor="Card">Card</label>
                    </div>
                <label>Elige las plataformas*:</label>
                    <div className="checkbox">
                        <input checked={plataformas.Playstation} type='checkbox' onChange={handlePlataformas} value="Playstation" id="Play"/>
                        <label htmlFor="Play">Playstation</label>
                        <input checked={plataformas.Xbox} type='checkbox' onChange={handlePlataformas} value="Xbox" id="Xbox"/>
                        <label htmlFor="Xbox">Xbox</label>
                        <input checked={plataformas.PC} type='checkbox' onChange={handlePlataformas} value="PC" id="PC"/>
                        <label htmlFor="PC">PC</label>
                        <input checked={plataformas.Nintendo} type='checkbox' onChange={handlePlataformas} value="Nintendo" id="Nintendo"/>
                        <label htmlFor="Nintendo">Nintendo</label>
                        <input checked={plataformas.Android} type='checkbox' onChange={handlePlataformas} value="Android" id="Android"/>
                        <label htmlFor="Android">Android</label>
                    </div>
                <input style={{width:"30%",margin:"12px", background:"red", color:"white", cursor:"pointer"}} type="submit" value='Agregar game'/>
            </form>
        </div>
    )
}
export default FormAdd
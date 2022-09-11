import React from "react";
import { Link } from "react-router-dom";
import './game.css'

const Game  = ({id, name, background_image, rating})=>{
    return (
        <Link to={`/detail/${id}`}>
            <div className="card-game">
                <img className="img" src={background_image} alt="" />
                <div>
                    <h1>{name}</h1>
                    <p>{rating}</p>
                </div>
            </div>        
        </Link>
    )
}
export default Game
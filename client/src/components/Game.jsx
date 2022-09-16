import React from "react";
import { Link } from "react-router-dom";
import './game.css'

const Game  = ({id, name, background_image, rating, genres , precio})=>{
    return (
        <Link to={`/detail/${id}`}>
            <div className="card-game">
                <img className="img" src={background_image? background_image: 'https://i.blogs.es/075120/pes2017/1366_2000.jpg'} alt="" />
                <div>
                    <h1>{name}</h1>
                    {/* <p>{rating}★</p> */}
                    <p>{genres.map(x=>x.name).join(' | ')}</p>
                    <p>{precio}</p>
                </div>
            </div>        
        </Link>
    )
}
export default Game
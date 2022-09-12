import React from "react";
import Game from "./Game";
import './games.css'

const Games = ({games})=>{
    return (
        <div className="container-games">
            {games.map(x=>(
                <Game key={x.id} id={x.id} name={x.name} background_image={x.background_image} genres={x.genres} rating={x.rating}></Game>
            ))}
            {/* <Game id={id} name={name} background_image={background_image} rating={rating}></Game> */}
        </div>
    )
}
export default Games
import React from "react";

const Paginado = ({allGames, gamesPágina, paginado})=>{
    let índicesPágina = []
    for (let i = 1; i <= Math.ceil(allGames/gamesPágina); i++) {        
        índicesPágina.push(i)
    }
    return (
        <nav>
            <ul>
            {índicesPágina && índicesPágina.map(x=>(
                <button onClick={()=>paginado(x)}>{x}</button>
            ))}
            </ul>
        </nav>
    )
}
export default Paginado
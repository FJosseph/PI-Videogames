import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { gameDetail } from "../actions";

const GameDetail = ()=>{
    const dispatch = useDispatch()
    const detail = useSelector(state=>state.gameDetail)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(gameDetail(id))
    }, [dispatch])
    const {name, description, fecha_lanzamiento, plataformas, imagen, rating, genres} = detail
    return (
        <div>
           <h1>Detail</h1>
           <h1>{name}</h1>
           <img src={imagen} alt="" />
           <p>{description}</p>
        </div>
    )
}
export default GameDetail
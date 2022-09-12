import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { gameDetail } from "../actions";
import './gamedetail.css'

const GameDetail = ()=>{
    const dispatch = useDispatch()
    const detail = useSelector(state=>state.gameDetail)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(gameDetail(id))
    }, [dispatch])
    const {name, description, fecha_lanzamiento, plataformas, imagen, rating, genres} = detail
    return (
        <div className="container-detail">
            <div id="go-home">
                <Link to='/home'>Home</Link>
            </div>
          <div id="box-detail">
            <div className="detail">
                <div className="img-container">
                    <img src={imagen} alt="" />
                </div>
                <div className="detail-text">
                    {/* <h1>Detail</h1> */}
                    <h1>{name}</h1>
                    <h4>Géneros:</h4>{genres && genres.map(x=>x.name).join(' | ')}
                    <h4>Fecha de lanzamiento:</h4>{fecha_lanzamiento}
                    <h4>Rating:</h4>{rating}★
                    <h4>Plataformas:</h4>{plataformas && plataformas.map(x=>x.platform.name).join(' | ')}
                    {/* {plataformas.map(x=>(<p>{x.platforms.name}</p>))} */}
                    {/* <p>{plataformas}</p> */}
                    {/* <p>{genres}</p> */}
                    {/* <h4></h4> */}
                </div>
            </div>
                <h4 style={{margin:"1%"}}>Descripción:</h4>
                <div id="description">
                    <p>{description}</p>
                </div>
          </div>
        </div>
    )
}
export default GameDetail
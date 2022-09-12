import React, { useEffect } from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../actions";
const LandingPage = ()=>{
    const dispatch = useDispatch()
    const videogames = useSelector(state=>state.videogames)
    useEffect(()=>{
        dispatch(getGames())
        dispatch(getGenres())
    },[])
    return (
        <div className="landing-page">
            <Link to='/home'>
                <button className="btn-home">HOME</button>
            </Link>
        </div>
    )
}
export default LandingPage
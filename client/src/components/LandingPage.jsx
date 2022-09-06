import React from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";
const LandingPage = ()=>{
    return (
        <div className="landing-page">
            <Link to='/home'>
                <button className="btn-home">HOME</button>
            </Link>
        </div>
    )
}
export default LandingPage
import { useState } from "react";
import { withRouter } from "react-router";
import Navbar from "../common/Navbar";
import "./styles.css"
function Homepage() {

    return (
        <div className="homepage-container">
            <Navbar/>
        </div>
    )
}

export default Homepage

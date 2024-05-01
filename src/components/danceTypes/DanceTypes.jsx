import React from "react";
import "./DanceTypes.css";


function DanceArray({ arrayPhoto }) {
    return (
        <div className="dance-types-wrapper">
            <h1>{arrayPhoto.name}</h1>
            <h2>{arrayPhoto.hours}</h2>
            <h2>{arrayPhoto.price}</h2>
            <div className="dance-types-img-container">
                <img src={arrayPhoto.image} alt={arrayPhoto.name} />
            </div>
        </div>
        
    )
}

export default DanceArray;
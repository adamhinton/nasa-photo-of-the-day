import React from "react";
import "./App.css";



const BigComponent = (props) =>{
    const {nasaAPI} = props; 
    console.log(props)
    return(
        <div>
            <p>Copyright: {nasaAPI.copyright} </p>
            <p>Date: {nasaAPI.date}</p>
            <p>Explanation: {nasaAPI.explanation}</p>
            <img src= {nasaAPI.hdurl} />

        </div>
    )
}

export default BigComponent;

//copyright date explanation title 
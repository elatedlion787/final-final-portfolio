import React from "react"
import "./Logo.css"

export default function Logo(){
    return (
        <div className="avatar">
            <img src= {process.env.PUBLIC_URL + "/images/images-1.png"} alt="Italian Trulli"></img>
            <h1> <a href="./">ElatedLion787's Portfolio Website </a></h1>
        </div>
        
    )
}
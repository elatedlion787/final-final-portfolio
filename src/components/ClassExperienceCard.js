import React from "react"
import "./ClassExperience.css"

export default function ClassExperienceCard(props){
    return (
        <div className='box btn_shadow'>
          <a href={props.link}>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.class_name}</h2>
            <span>{props.skills}</span>
          </div>
          <div className='rate'>
            <button className='btn_shadow ' type='button' >  {props.semester} </button>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
        </a>
      </div>
    );
}
import React from "react";
import "./typewriter.scss";
export default function TypeWriter(props){
    return(
    <>
    <h1 className="typewriter" id="l2r1">{props.text[0]}</h1>
    <h1 className="typewriter" dir="rtl" id="r2l">{props.text[1]}</h1>
    <h1 className="typewriter" id="l2r2">{props.text[2]}</h1>
    </>)
}
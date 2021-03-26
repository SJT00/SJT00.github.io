import React from "react";
import "../styles/typewriter.scss";
export default function TypeWriter(props){
return(<h1 class="typewriter">{props.text[0]}</h1>)
}
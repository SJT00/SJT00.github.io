import React from "react";
import "../styles/typewriter.scss";
export default function TypeWriter(props){
    var i = 0;
    setTimeout(i=1,10000);
    setTimeout(i=2,14000);
    setTimeout(i=0,18000);
    console.log(i);
    return(<h1 class="typewriter">{props.text[i]}</h1>)
}
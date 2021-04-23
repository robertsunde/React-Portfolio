import React from "react";
import "./style.css"
import Project from "./Project";



export default class Portfolio extends React.Component{

 
//////////////////////////////////////////////////
// RENDERS PAGE HEADER
//////////////////////////////////////////////////

render(){
    return(
<>
<div className="row">
  <div className="col-12">
  <p className="contacttitle">APPLICATIONS</p>
</div>
</div>

<Project>

<div class="portfolio">
      <p><a  className="applicationtitle" href="https://github.com/robertsunde/Weather-Dashboard" target="_blank">Weather Application</a></p>
      <a className="centerimage" href="https://robertsunde.github.io/Weather-Dashboard/" target="_blank"> <img className="applicationimages" src="./Assets/weatherApp.png"  alt="Weather App"/> </a>
    </div>


</Project>


</> 
    )}}
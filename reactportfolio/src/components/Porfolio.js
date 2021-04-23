import React from "react";
import "./style.css"
import Project from "./Project";
import weatherapp from "../assets/weatherApp.png"
import passwordgenerator from "../assets/passwordGenerator.jpg"
import dayplanner from "../assets/dayPlanner.png"
import nalej from "../assets/nalejApp.jpeg"
import burgertime from "../assets/Burger-Application-Live.png"
import amnesia from "../assets/amnesia(null).png"
import {Row} from "react-bootstrap"



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


<Row>
<div className="portfolio col-12">
<p><a  className="applicationtitle" href="https://github.com/robertsunde/Weather-Dashboard" target="_blank">Weather Application</a></p>
<a className="centerimage" href="https://robertsunde.github.io/Weather-Dashboard/" target="_blank"> <img className="applicationimages" src={weatherapp}  alt="Weather App"/> </a>
</div>

<div className="portfolio col-12">
      <p><a  className="applicationtitle" href="https://github.com/robertsunde/Password-Generator" target="_blank">Password Generator</a></p>
      <a className="centerimage" href="https://robertsunde.github.io/Password-Generator/" target="_blank"> <img className="applicationimages" src={passwordgenerator}  alt="Password Generator"/> </a>
    </div>

    <div className="portfolio col-12">
      <p><a  className="applicationtitle" href="https://github.com/robertsunde/Day-Planner" target="_blank">Day Planner</a></p>
      <a className="centerimage" href="https://robertsunde.github.io/Day-Planner/" target="_blank"> <img className="verticalapplicationimages" src={dayplanner}  alt="Day Planner"/> </a>
    </div>

    <div className="portfolio col-12">
      <p><a  className="applicationtitle" href="https://github.com/sdemercurio/nalej" target="_blank">Nalej</a></p>
      <a className="centerimage" href="http://nalej-app.com/" target="_blank"> <img className="applicationimages" src={nalej}  alt="Nalej"/> </a>
    </div>

    <div className="portfolio col-12">
      <p><a  className="applicationtitle" href="https://github.com/robertsunde/burger-time" target="_blank">Burger Time</a></p>
      <a className="centerimage" href="https://its-burger-time-application.herokuapp.com/" target="_blank"> <img className="applicationimages" src={burgertime}  alt="Burger Time"/> </a>
    </div>

    <div className="portfolio col-12">
      <p><a  className="applicationtitle" href="https://github.com/robertsunde/rotesast" target="_blank">Amnesia(Null)</a></p>
      <a className="centerimage" href="https://agile-gorge-53521.herokuapp.com/" target="_blank"> <img className="applicationimages" src={amnesia}  alt="Amnesia(Null)"/> </a>
    </div>





</Row>




</> 
    )}}
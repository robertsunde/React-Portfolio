import React from "react";
import "./style.css"
import banner from "../assets/main_banner_cropped.jpg"
import thumbnail from "../assets/thumbnail.PNG"

export default class Homepage extends React.Component{

 
//////////////////////////////////////////////////
// RENDERS PAGE HEADER
//////////////////////////////////////////////////

render(){
    return(

<>
<section className="bg-home">

   <div class="w3-display-container">
   <img className="banner" src={banner}  alt="RobertSunde"/>
  </div>

</section>
  <p className = "intro">let graduate = "Web Developer"; <br/>
    console.log("Full Stack"+" "+graduate);
    </p>
    <p className="thumbnail">ctrl+shift+I ➞ Console : <img className="imagethumbnail" src={thumbnail}  alt="consolelog"/></p>
</>

    
    )}}





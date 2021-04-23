import React from "react";
import "./style.css"
export default class Contact extends React.Component{

 


//////////////////////////////////////////////////
// RENDERS PAGE HEADER
//////////////////////////////////////////////////

render(){
return(
<>
<div className="row">
    <div className="col-12">
    <p className="contacttitle">CONTACT</p>
</div>
</div>


<div className="row">
    <div className="col-12">
    <p className="contactcontent" ><a href="tel:5863210914">CALL ME</a></p>
</div>
</div>


<div className="row">
    <div className="col-12">
    <p className="contactcontent" ><a href="mailto: robertsundeMSU@gmail.com">EMAIL ME</a></p>
</div>
</div>


<div className="row">
    <div className="col-12">
    <p className="contactcontent" ><a href="./assets/Resume 4-1-21.pdf" download target="_blank">DOWNLOAD RESUME</a></p>
</div>
</div>
</>
)}}
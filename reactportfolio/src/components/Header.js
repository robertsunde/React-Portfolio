import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./style.css";
import {Col, Row} from "react-bootstrap";



export default class Header extends React.Component{

 
//////////////////////////////////////////////////
// RENDERS PAGE HEADER
//////////////////////////////////////////////////

render(){
    return(
<Row>

<Col xs={1}>
<NavLink 
className="nav-link headerselectors"
activeClassName="active thispage"
isActive={()=>window.location.pathname==="/homepage"}
to = "/homepage" 
>Home</NavLink>
</Col>

<Col xs= {8}></Col>

<Col xs= {1}>
<NavLink 
className="nav-link headerselectors"
activeClassName="active thispage"
isActive={()=>window.location.pathname==="/portfolio"}
to = "/portfolio" 
>Portfolio</NavLink>
</Col>

<Col xs= {1}>
<NavLink 
className="nav-link headerselectors"
activeClassName="active thispage"
isActive={()=>window.location.pathname==="/photography"}
to = "/photography" 
>Photography</NavLink>
</Col>

<Col xs= {1}>
<NavLink 
className="nav-link headerselectors"
activeClassName="active thispage"
isActive={()=>window.location.pathname==="/contact"}
to = "/contact" 
>Contact</NavLink>
</Col>


</Row>
    )}}
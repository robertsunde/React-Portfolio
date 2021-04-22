import React from "react";
import {Link, NavLink} from "react-router-dom"



export default class Header extends React.Component{

 
//////////////////////////////////////////////////
// RENDERS PAGE HEADER
//////////////////////////////////////////////////

render(){
    return(
<div class="row">

<div className="col-1">
<NavLink 
className="nav-link headerselectors"
activeClassName="active"
isActive={()=>window.location.pathname==="/homepage"}
to = "/homepage" 
>Home</NavLink>
</div>


<div className="col-8"></div>

<div className="col-1">
<NavLink 
className="nav-link headerselectors"
activeClassName="active"
isActive={()=>window.location.pathname==="/portfolio"}
to = "/portfolio" 
>Portfolio</NavLink>
</div>

<div className="col-1">
<NavLink 
className="nav-link headerselectors"
activeClassName="active"
isActive={()=>window.location.pathname==="/photography"}
to = "/photography" 
>Photography</NavLink>
</div>

<div className="col-1">
<NavLink 
className="nav-link headerselectors"
activeClassName="active"
isActive={()=>window.location.pathname==="/contact"}
to = "/contact" 
>Contact</NavLink>
</div>


</div>
    )}}
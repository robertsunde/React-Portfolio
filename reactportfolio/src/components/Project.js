import React from "react";
import {Container, Row, Col} from "reactstrap"
import "./style.css"






const Project = (props) => {

return(
<>

<div className="portfolio col-12">
{props.children}
</div>

</> 
)}

export default Project
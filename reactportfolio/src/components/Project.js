import React from "react";
import {Container, Row, Col} from "reactstrap"
import "./style.css"






const Project = (props) => {

return(
<>

<Container>
<Row>
<Col md="12">
{props.children}
</Col>
</Row>
</Container>

</> 
)}

export default Project
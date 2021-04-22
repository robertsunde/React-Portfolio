import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Photography from "./components/Photography";
import Portfolio from "./components/Porfolio";
import Contact from "./components/Contact";






function App() {
  return (
  <>

<Router>
<Header/>
<Switch>

{/* Paths for pages */}
<Route exact path = "/homepage" component = {Homepage} />
<Route exact path = "/photography" component = {Photography} />
<Route exact path = "/portfolio" component = {Portfolio} />
<Route exact path = "/contact" component = {Contact} />


{/* Defaults to homepage */}
<Route component = {Homepage} />




</Switch>
</Router>










  </> 
  );
}

export default App;

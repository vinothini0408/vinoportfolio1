import React from "react";
import Header from "./component/header";
import Home from "./component/home";
import About from "./component/about"
import Project from "./component/project";
import Contact from "./component/contact";

function App(){
  return (
<div>
  <Header/>
  <Home />
  <About/>
  <Project/>
  <Contact/>
</div>
  );
}

export default App;

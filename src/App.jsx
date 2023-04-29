import React, { useState, useEffect } from "react";
import Bored from "./components/Bored";
import Movie from "./components/Movie";
import ClassBasedComponent from "./components/Class-based-component";
import FunctionBasedComponents from "./components/Function-BAsed-Components";

function App() {
  return (
    <div>
      {/* <Bored/> */}
      {/* <Movie /> */}
      <ClassBasedComponent />
      <FunctionBasedComponents />
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="hgfhfhfg" />
    </div>
  );
}

export default App;

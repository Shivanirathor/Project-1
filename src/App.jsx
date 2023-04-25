import React, { useState, useEffect } from "react";
import Bored from "./components/Bored";
import Movie from "./components/Movie";
import ClassBasedComponent from "./components/Class-based-component";
import FunctionBasedComponents from "./components/Function-BAsed-Components";

function App() {
  return (
    <div>
      {/* <Bored/> */}
      <Movie />
      <ClassBasedComponent />
      <FunctionBasedComponents />
    </div>
  );
}

export default App;

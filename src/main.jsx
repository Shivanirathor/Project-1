 import React from 'react'          ///module ko import isliye krte h taki jsx ko use kr ske
import {createRoot} from 'react-dom/client'
import App from './App'


// this is main file
const container = document.querySelector("#root");
const root = createRoot(container);


root.render(<App />);


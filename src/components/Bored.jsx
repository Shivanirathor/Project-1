
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const name = "shivani"
// name = "riya"

// const [name, setNAme] = useState("shivani")
// setNAme("riya")

function Bored() {
  const [data, setData] = useState([]);
  
  const suggestActivity =()=>{
    axios.get('https://www.boredapi.com/api/activity')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  return (
    <div>
      <button onClick={suggestActivity}>Click Me To Suggest Activity</button>
      <h1>Activity</h1>
     <div className="activity">
      {data.activity}<br></br>
      {data.type}
     </div>
    </div>
  );
}

export default Bored;

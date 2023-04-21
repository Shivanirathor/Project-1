import React, { useState, useEffect } from "react";
import axios from "axios";

function Movie() {
  const [data, setData] = useState([]);

  const suggestActivity = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1%27"
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayTitle = (data) => {
    return data.sort().map((movie) => {
      return (
        <div>
          <div
            style={{
              padding: "5px",
              background: "lightBlue",
              fontSize: "25px",
              margin: "6px",
            }}
          >
            {movie.title} {movie.vote_average}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={suggestActivity}>Click Me To Show Movie List</button>

      <div className="activity">{data.length && displayTitle(data)}</div>
    </div>
  );
}

export default Movie;

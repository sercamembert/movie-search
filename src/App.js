import "./scss/App.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const key = "55c87d08";
  const [title, setTitle] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=${key}&t=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <div
        className={data.length > 0 ? "container" : "container container-null"}
      >
        <div className="container-wrapper">
          <form className="search-container">
            <input
              type="text"
              placeholder="Enter title..."
              onInput={(event) => setTitle(event.target.value)}
            />
            <button className="btn-search" onClick={handleSearch}>
              Search
            </button>
          </form>
          <span className="error">{data.Error}</span>
          {Object.keys(data).length > 0 && !data.Error && (
            <section className="movie">
              <div className="movie__img">
                <img src={data.Poster} alt="posterImg" />
              </div>
              <div className="movie__container">
                <span className="movie__title">{data.Title}</span>
                <div className="movie__details-container">
                  <span className="movie__detail">
                    <i className="fa-solid fa-star yellow-border"></i>
                    {data.imdbRating}
                  </span>
                  <span className="movie__detail">
                    <i className="fa-regular fa-clock"></i>
                    {data.Runtime}
                  </span>
                  <span className="movie__detail">
                    <i className="fa-regular fa-calendar"></i>
                    {data.Year}
                  </span>
                </div>
                <div className="movie__genre-container">
                  {data.Genre &&
                    data.Genre.split(", ").map((genre) => (
                      <div
                        className={
                          data.Genre.length > 2
                            ? "movie__genre genre-mobile"
                            : "movie__genre"
                        }
                        key={genre}
                      >
                        {genre}
                      </div>
                    ))}
                </div>
                <span className="movie__description">{data.Plot}</span>
                <span className="movie__actors">Actors: {data.Actors}</span>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

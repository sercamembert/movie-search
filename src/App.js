import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="heading">
        Movies take us on a journey beyond our everyday lives.
      </h1>
      <div className="container">
        <div className="container-wrapper">
          <div className="search"></div>
          <section className="movie">
            <div className="movie__container">
              <span className="movie__title"></span>
              <div className="movie__details-container"></div>
              <div className="movie__genre-container"></div>
              <span className="movie__description"></span>
              <span className="movie__actors"></span>
            </div>
            <div className="movie__img"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

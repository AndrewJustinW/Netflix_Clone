// Object of API ENDPOINTS
import requests from "./data/requests"
// Styling
import "./app.scss"
// Components
import Row from "./components/Row/Row"
import Banner from "./components/Banner/Banner";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;

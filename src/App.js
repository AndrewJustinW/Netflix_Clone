import Row from "./components/Row/Row"
import requests from "./data/requests"
import "./app.scss"

function App() {
  return (
    <div className="App">

      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />

    </div>
  );
}

export default App;

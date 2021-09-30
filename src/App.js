import Row from "./components/Row"
import requests from "./data/requests"

function App() {
  return (
    <div className="App">

      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />

    </div>
  );
}

export default App;

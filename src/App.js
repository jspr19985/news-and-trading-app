import './App.css';
import Chart from "./Chart";
import NewsFeed from "./NewsFeed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          News and Trading App
        </p>
      </header>
      <div className="pageContainer">
        <Chart />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;

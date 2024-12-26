import React, { useEffect } from 'react';
import './App.css';
import Chart from "./Chart";
import NewsFeed from "./NewsFeed";
import { getTestData } from "./utils/getTestData";
import { getNewsData } from "./utils/getNews";

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestData();
      const news = await getNewsData();
      console.log(news);

      const { userId, id, title, completed } = data;
      console.log(id);
      console.log(userId);
      console.log(title);
      console.log(completed);
    }
    fetchData();
  }, [])

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

import './App.css';
import WebtoonList from './components/webtoonList';
import Header from './components/header';
import { FilterBar } from './components/filters';
import { useState } from 'react';
import { webtoons } from './repository/webtoons';

function App() {
  const [filteredData, setFilteredData] = useState(webtoons)

  return (
    <div className="App">
      <WebtoonList filteredData={filteredData} />
      <Header />
      <FilterBar filteredData={filteredData} setFilteredData={setFilteredData} />
    </div>
  );
}

export default App;

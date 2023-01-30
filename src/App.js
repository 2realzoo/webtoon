import styles from './App.module.css';
import WebtoonList from './components/webtoonList';
import Header from './components/header';
import FilterBar from './components/filterBar';
import { useState } from 'react';
import { webtoons } from './repository/webtoons';
import DarkModeProvider from './components/DarkMode/DarkMode';
import Footer from './components/footer';


function App() {
  const [filteredData, setFilteredData] = useState(webtoons);

  return (
    <DarkModeProvider>
      <Header setFilteredData={setFilteredData}/>
      <FilterBar
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <WebtoonList filteredData={filteredData} />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;

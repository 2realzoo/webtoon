import React, { useState } from "react";

import styles from "./App.module.css";
import WebtoonList from "./components/webtoonList";
import Header from "./components/header";
import { FilterBar } from "./components/filters";
import { webtoons } from "./repository/webtoons";

function App() {
  const [filteredData, setFilteredData] = useState(webtoons);

  return (
    <div className={styles.container}>
      <Header  />
      <FilterBar
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <WebtoonList filteredData={filteredData} />
    </div>
  );
}

export default App;

import './App.css';
import WebtoonList from './components/webtoonList';
import Nav from './components/nav';
import { FilterBar } from './components/filters';


function App() {
  return (
    <div className="App">
      <WebtoonList />
      <Nav />
      <FilterBar/>
    </div>
  );
}

export default App;

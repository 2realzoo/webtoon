import './App.css';
import Nav from './components/nav';
import { FilterBar } from './components/filters';
import WebtoonList from './components/webtoonList';

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

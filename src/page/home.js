import WebtoonList from '../components/webtoonList.js'
import Header from '../components/header.js';
import FilterBar from '../components/filterBar.js';
import { useState } from 'react';
import DarkModeProvider from '../components/DarkMode/DarkMode.js';

const Home = () => {
    const [inputView, setInputView] = useState(false);
  
    return (
        <DarkModeProvider>
        <Header
            inputView={inputView}
            setInputView={setInputView}
        />
        {inputView ? null : (
            <FilterBar />
        )}
        <WebtoonList/>
        </DarkModeProvider>

  );
}

export default Home;
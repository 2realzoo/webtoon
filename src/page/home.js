import WebtoonList from '../components/webtoonList'
import Header from '../components/header';
import FilterBar from '../components/filterBar';
import { useState } from 'react';
import { webtoons } from '../repository/webtoons';
import DarkModeProvider from '../components/DarkMode/DarkMode';

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
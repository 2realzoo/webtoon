import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
// import { logo } from '../../public/img/logo.png';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from './DarkMode/DarkMode';
import { useState } from 'react';
import { webtoons } from '../repository/webtoons';
import styles from './header.module.css';

const Header = ({ setFilteredData, inputView, setInputView }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSearch = e => {
    setFilteredData(webtoons.filter(ele => ele.title.includes(e.target.value)));
  };

  const handleClickUser = () => {};

  return (
    <>
      <span onClick={toggleDarkMode}>{!darkMode ? <HiMoon /> : <HiSun />}</span>
      <header className={styles.header}>
        <span className="profile-icon" onClick={handleClickUser}>
          <FaUser></FaUser>
        </span>
        <span className="webtoon-logo">icon</span>
        {inputView ? (
          <input
            type="text"
            onChange={handleSearch}
            autoFocus
            onBlur={() => setInputView(false)}></input>
        ) : (
          <span className="search-icon" onClick={() => setInputView(true)}>
            <FaSearch></FaSearch>
          </span>
        )}
      </header>
    </>
  );
};

export default Header;

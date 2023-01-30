import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
// import { logo } from '../../public/img/logo.png';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from './DarkMode/DarkMode';
import { useState } from 'react';
import { webtoons } from '../repository/webtoons';
import styles from './header.module.css';
import { Link } from 'react-router-dom'

const Header = ({ setFilteredData }) => {
  const [inputView, setInputView] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSearch = e => {
    setFilteredData(webtoons.filter(ele => ele.title.includes(e.target.value)));
  };

  return (
    <>
      <span onClick={toggleDarkMode}>{!darkMode ? <HiMoon /> : <HiSun />}</span>
      <header className={styles.header}>
        {isLogin ? <Link to='/mypage'><FaUser></FaUser></Link> : <Link to='/Login'><FaUser></FaUser></Link>}
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

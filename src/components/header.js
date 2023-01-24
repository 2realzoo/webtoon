import { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import styles from './header.module.css';
import { webtoons } from '../repository/webtoons';

const Header = ({ setFilteredData }) => {
  const [inputView, setInputView] = useState(false);

  const handleSearch = e => {
    setFilteredData(webtoons.filter(ele => ele.title.includes(e.target.value)));
  };

  return (
    <>
      <header className={styles.header}>
        <span className="user-icon">
          <FaUser></FaUser>
        </span>
        <span className="webtoon-logo">icon</span>
        <span className="search-icon" onClick={() => setInputView(true)}>
          {inputView ? (
            <input
              type="text"
              onChange={handleSearch}
              onBlur={() => setInputView(false)}></input>
          ) : (
            <FaSearch></FaSearch>
          )}
        </span>
      </header>
    </>
  );
};

export default Header;

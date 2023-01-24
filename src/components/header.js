import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className="header">
        <span className="user-icon">
          <FaUser></FaUser>
        </span>
        <span className="webtoon-logo">icon</span>
        <span className="search-icon">
          <FaSearch></FaSearch>
        </span>
      </header>
    </>
  );
};

export default Header;

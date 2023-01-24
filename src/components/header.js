import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
// import { logo } from '../../public/img/logo.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <span className="profile-icon">
          <FaUser></FaUser>
        </span>
        <span className="webtoon-logo">
          <img
            src={`${process.env.PUBLIC_URL}/public/img/logo.png`}
            alt="logo"></img>
        </span>
        <span className="search-icon">
          <FaSearch></FaSearch>
        </span>
      </header>
    </>
  );
};

export default Header;

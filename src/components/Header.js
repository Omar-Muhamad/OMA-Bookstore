import { Link } from 'react-router-dom';
import userAvatar from '../images/user-avatar.png';

const Header = () => (
  <header id="header">
    <nav className="navbar d-flex">
      <div className="links d-flex">
        <Link to="/">
          <h1 className="logo">OMA Bookstore</h1>
        </Link>
        <ul className="navLinks d-flex">
          <Link to="/">
            <li className="navLink">Books</li>
          </Link>
          <Link to="/Categories">
            <li className="navLink">Categories</li>
          </Link>
        </ul>
      </div>
      <div className="userAvatar">
        <img src={userAvatar} alt="User Avatar" />
      </div>
    </nav>
  </header>
);

export default Header;

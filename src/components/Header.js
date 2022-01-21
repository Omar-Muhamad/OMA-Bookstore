import { Link } from 'react-router-dom';

const Header = () => (
  <header id="header">
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <h1>OMA Bookstore</h1>
        </Link>
      </div>
      <ul className="navLinks">
        <Link to="/">
          <li className="navLink">Books</li>
        </Link>
        <Link to="/Categories">
          <li className="navLink">Categories</li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;

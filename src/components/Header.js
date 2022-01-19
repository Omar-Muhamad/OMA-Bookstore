import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h1>OMA Bookstore</h1>
    </Link>
    <nav className="navbar">
      <ul className="navLinks">
        <Link to="/">
          <li className="navLink">Books</li>
        </Link>
        <Link to="/Catagories">
          <li className="navLink">Catagories</li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;

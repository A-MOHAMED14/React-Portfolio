import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="main-header">
      <h1 className="header-title">Amin</h1>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">About Me</Link></li>
        <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        <li className="nav-item"><Link to="/resume" className="nav-link">Resume</Link></li>
      </ul>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-2">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          My Journal
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Write a post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/" className="links-home">
          {"[ Home ]"}
        </Link>
        <Link to="/add-phone" className="links-add">
          {"[ Add ]"}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


import { Link, NavLink, useLocation } from "react-router-dom";
import "./LinkComponent.css";

const LinkComponent = () => {
  const { pathname } = useLocation();

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="custom-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="custom-link" to="/products">Produtos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="custom-link" to="/contact">Contato</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="custom-link" to="/faq">FAQ</NavLink>
      </li>
    </ul>
  );
};

export default LinkComponent;

  
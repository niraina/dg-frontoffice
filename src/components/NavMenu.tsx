import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink  } from "react-router-dom";

const NavMenu: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Link className="navbar-brand" to="/">
          TP REACT
        </Link>
        <Nav className="mx-auto">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/products">
            Products
          </NavLink >
          <NavLink  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/types">
            Types
          </NavLink >
          <NavLink  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/departements">
            Departements
          </NavLink >
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavMenu;

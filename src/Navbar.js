import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./styles/NavbarStyles.css";
import logo from "./Logo.png";
import { useAuth } from "./contexts/AuthContext";
import { useState } from "react";

function NavigationBar({ callback }) {
  const location = useLocation();
  const handleSearchInput = (e) => {
    callback(e.target.value);
  };
  //hiding search
  const showSearchBar = location.pathname === "/";
  //hiding nav
  const hideNav =
    location.pathname === "/login" || location.pathname === "/signup";

  //Log out
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("failed to log out");
    }
  }

  return (
    <>
      {!hideNav && (
        <Navbar className="Navbar" expand="lg">
          <Navbar.Brand>
            {" "}
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {showSearchBar && (
              <Form className="search-bar" inline>
                <FormControl
                  type="text"
                  placeholder="Find the best recipes!"
                  className="mr-sm-2"
                  onChange={handleSearchInput}
                />
              </Form>
            )}
            <Nav>
              <NavLink
                className="Nav-link"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>

              <NavLink className="Nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="Nav-link" to="/contact">
                Contact
              </NavLink>
              <NavDropdown title="Account" id="collasible-nav-dropdown">
                <NavDropdown.Item ><strong>User: </strong>{currentUser && currentUser.email}</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}

export default NavigationBar;
